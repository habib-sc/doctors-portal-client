import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const { name, slots } = treatment;

    const handleBooking = e => {
        e.preventDefault();
        const bookingDate = e.target.date.value;
        const bookingSlot = e.target.slot.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        console.log(bookingDate, bookingSlot, name, email, phone);
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
                                slots.map(slot => <option key={slot._id}>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs mb-3" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs mb-3" />
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