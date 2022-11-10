import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { FaStar, FaStarHalf } from 'react-icons/fa'
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewDetails from './ReviewDetails';

const ServiceDetails = () => {
    useTitle('Service Details');
    const { _id, service_name, rating, details, img, photographer } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://shutters-server-theta.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const navigate = useNavigate();
    const handleReviewPage = () => {
        if (!user?.email) {
            alert('Please login to add a review');
        }
        else {
            navigate(`/review/${_id}`);
        }
    }
    return (
        <div className='bg-blue-200'>
            <Header></Header>
            {/* service section */}
            <h1 className='my-16 font-light text-4xl  text-center'>{service_name}</h1>
            <img className='w-screen' src={img} alt="" />
            <div className='my-10  text-center'>
                <img className='rounded-full w-16 mx-auto' src={photographer.shot_img} alt="" />
                <h1 className='font-bold mb-5'>{photographer.name}</h1>
                <p className='w-3/4 font-light mx-auto'>{details}</p>
            </div>
            <div className='flex justify-center  text-center'>
                <p className='font-semibold'>Ratings- ({rating}) </p>
                <FaStar className='mt-1 ml-2 text-yellow-600'></FaStar>
                <FaStar className='mt-1 ml-2 text-yellow-600'></FaStar>
                <FaStar className='mt-1 ml-2 text-yellow-600'></FaStar>
                <FaStar className='mt-1 ml-2 text-yellow-600'></FaStar>
                <FaStarHalf className='mt-1 ml-2 text-yellow-600'></FaStarHalf>
            </div>
            {/* review section */}
            <h1 className='mt-16 font-light text-4xl  text-center'>Reviews</h1>
            <p className=' text-center'>See reviews of people about our photographers</p>
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <div className="flex flex-col overflow-x-auto text-xs">
                    <div className="flex text-left bg-gray-300">
                        <div className=" w-20 px-2 py-3 sm:p-3">
                            Image
                        </div>
                        <div className="w-32 px-2 py-3 sm:p-3">Reviewer</div>
                        <div className="flex-1 px-2 py-3 sm:p-3">Review</div>
                        <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">Rating</div>
                    </div>
                    <div>
                        {
                            reviews.map(review => <ReviewDetails
                                key={review._id}
                                review={review}
                            ></ReviewDetails>).reverse()
                        }
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='btn btn-outline' onClick={handleReviewPage}>Add review</button>
            </div>
        </div>
    );
};

export default ServiceDetails;