import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Header from '../Shared/Header/Header';

const AddService = () => {
    useTitle('Add Service');
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const service_name = form.service_name.value;
        const img = form.service_name.img;
        const details = form.details.value;
        const rating = form.rating.value;

        const service = {
            service_name,
            img,
            details,
            rating
        }
        fetch(`https://shutters-server-theta.vercel.app/services?email=${user?.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your service is added');
                    form.reset();
                }
                setServices(data);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='bg-slate-400 text-center'>
            <Header></Header>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">

                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                        <div className="space-y-2">
                            <form onSubmit={handleAddService}>
                                <h2 className="my-16 text-4xl text-center">Please give necessary information to add service</h2>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                                    <input name="service_name" type="text" placeholder="Service Name" className="input input-ghost w-full input-bordered bg-slate-100 mx-auto" required />
                                    <input name="img" type="text" placeholder="Photo" className="input input-ghost w-full input-bordered bg-slate-100" required />
                                    <input name="details" type="text" placeholder="Service Description" className="input input-ghost w-full mx-auto input-bordered bg-slate-100" required />
                                    <input name='rating' type="text" placeholder='Rating' className='input input-ghost w-full input-bordered bg-slate-100' required />
                                </div>

                                <input className='btn mt-10' type="submit" value="Add Service" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddService;