import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, service_name, rating, price, details, img } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">


            <PhotoProvider maskOpacity={0.5}>
                <PhotoView src={img}>
                    <figure>
                        <img className='w-96 h-60' src={img} alt="Shoes" />
                    </figure>
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title font-bold">{service_name}</h2>
                <h1>{details.slice(0, 100)}</h1>
                <div className='flex justify-between'>
                    <p className='text-base text-gray-600 font-semibold'>Price: {price}</p>
                    <p className='text-base text-gray-600 font-semibold'>Rating: {rating}</p>
                    <Link to={`/service/${_id}`}>
                        <button className='text-gray-600 text-2xl' title='View Details'><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;