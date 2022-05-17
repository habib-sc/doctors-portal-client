import React from 'react';

const DeleteConfirm = ({deleteDoctor, handleDoctorDelete}) => {
    const {name, email} = deleteDoctor;
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure you want to delete {name}</h3>
                <p className="py-4">If you click Ok, then it will be deleted permanently. Your can't restore it.</p>
                <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn btn-primary text-white">Cancel</label>
                <label onClick={ () => handleDoctorDelete(email) } className="btn btn-error text-white">Ok</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteConfirm;