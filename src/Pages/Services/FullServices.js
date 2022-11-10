import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Header from '../Shared/Header/Header';
import ServiceCard from './ServiceCard';

const FullServices = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shutters-server-theta.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])
    return (
        <div className='bg-stone-400'>
            <Header></Header>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 ml-12 lg:ml-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default FullServices;