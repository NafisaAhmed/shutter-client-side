import React from 'react';

const ReviewDetails = ({ review }) => {
    const { photoURL, reviewer, reviewMessage } = review;
    return (
        <div className="flex border-b border-opacity-20 border-gray-300 bg-gray-50">
            <div className="w-20 px-2 py-3 sm:p-3">
                <img className='rounded-full h-12' src={photoURL} alt="" />
            </div>
            <div className="w-32 px-2 py-3 sm:p-3">
                <p>{reviewer}</p>
            </div>
            <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">{reviewMessage}</div>
            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block text-gray-600">
                <p>4.5</p>
            </div>
        </div>
    );
};

export default ReviewDetails;