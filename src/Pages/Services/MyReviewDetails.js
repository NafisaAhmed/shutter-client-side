import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewDetails = ({ review, handleDelete }) => {

    const { service, _id, serviceName, reviewMessage } = review;

    return (
        <div>
            <div className="flex border-b border-opacity-20 border-gray-300 bg-gray-50">
                {/* The button to open modal */}
                <div className="w-28 px-2 py-3 sm:p-3">
                    <a href="#my-modal-2" className="btn">X</a>

                    <div className="modal" id="my-modal-2">
                        <div className="modal-box">

                            <p className="py-4 text-2xl font-bold">Are you sure?</p>
                            <div className="modal-action">
                                <button onClick={() => handleDelete(_id)} href="#" className="btn">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-28 block px-2 py-3 truncate sm:p-3 sm:w-auto">{serviceName}</div>
                <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">{reviewMessage}</div>
                <div className="w-32 px-2 py-3 text-right sm:p-3 sm:block text-gray-600">
                    <Link to='/update'><button className='btn'>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyReviewDetails;