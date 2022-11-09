import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import { FaStar, FaStarHalf } from 'react-icons/fa'
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Service Details')
    const { service_name, rating, details, img, photographer } = useLoaderData();
    return (
        <div className='bg-blue-200 text-center'>
            <Header></Header>
            {/* service section */}
            <h1 className='my-16 font-light text-4xl'>{service_name}</h1>
            <img className='w-screen' src={img} alt="" />
            <div className='my-10'>
                <img className='rounded-full w-16 mx-auto' src={photographer.shot_img} alt="" />
                <h1 className='font-bold mb-5'>{photographer.name}</h1>
                <p className='w-3/4 font-light mx-auto'>{details}</p>
            </div>
            <div className='flex justify-center'>
                <p className='font-semibold'>Ratings- ({rating}) </p>
                <FaStar className='mt-1 ml-2 text-yellow-600'></FaStar>
                <FaStar className='mt-1 ml-2 text-yellow-600'></FaStar>
                <FaStar className='mt-1 ml-2 text-yellow-600'></FaStar>
                <FaStar className='mt-1 ml-2 text-yellow-600'></FaStar>
                <FaStarHalf className='mt-1 ml-2 text-yellow-600'></FaStarHalf>
            </div>
            {/* review section */}
        </div>
    );
};

export default ServiceDetails;