import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = e => {
        e.preventDefault();
        
        const booking = {
            treatmentId: _id,
            treatment: treatment.name,
            date: e.target.date.value,
            slot: e.target.slot.value,
            patientName: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        };
        
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                toast.success(`Appointment set on ${booking.date} at ${booking.slot}`);
            }else{
                toast.error(`Already have an appointment on ${booking.date} at ${booking.slot}`);
            }

        });
        
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-200 border-red-200 hover:bg-red-300 hover:border-red-300 text-red-500">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='text-center mt-5'>
                        <input type="text" name='date' disabled value={format(selectedDate, 'PP')} className="input input-bordered w-full max-w-xs mb-3 disabled:bg-gray-100 disabled:border-gray-300" />
                        <select name='slot' className="select select-secondary w-full max-w-xs mb-3">
                            {slots &&
                                slots.map((slot, index) => <option key={index}>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered input-secondary w-full max-w-xs mb-3 disabled:bg-gray-100 disabled:border-gray-300" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered input-secondary w-full max-w-xs mb-3 disabled:bg-gray-100 disabled:border-gray-300" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs mb-3" /> <br />
                        <button className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8'>Submit</button>
                    </form>
                    <div className="modal-action">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;