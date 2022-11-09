import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/limitedServices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])
    return (
        <div>
            <div className='text-center mt-20'>
                <h1 className='text-4xl font-light'>FEATURED SERVICES</h1>
                <p className='my-8'>Explore our exclusive services, find photographers <br /> you would love to explore and hire.</p>
            </div>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 ml-12 lg:ml-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-5'>
                <Link to='/services'>
                    <button className='btn btn-outline'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;