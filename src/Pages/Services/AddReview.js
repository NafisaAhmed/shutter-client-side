import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Header from '../Shared/Header/Header';

const AddReview = () => {
    const { _id, service_name, img } = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('Add review');

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const photoURL = form.photoURL.value;
        const reviewMessage = form.reviewMessage.value;

        const review = {
            service: _id,
            serviceName: service_name,
            reviewer: name,
            email,
            photoURL,
            reviewMessage
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('shutter-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your review is added');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='bg-slate-400 text-center'>
            <Header></Header>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={img} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                        <div className="space-y-2">
                            <form onSubmit={handleAddReview}>
                                <h2 className="my-16 text-4xl text-center">Please give necessary information <br /> to add your review about our<br /> <span className='text-amber-600 font-bold'>{service_name}</span></h2>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full input-bordered bg-slate-100 mx-auto" />
                                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered bg-slate-100" />
                                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full mx-auto input-bordered bg-slate-100" readOnly />
                                    <input name='photoURL' type="text" placeholder='Add your photo' className='input input-ghost w-full input-bordered bg-slate-100' required />
                                </div>
                                <textarea name="reviewMessage" className="textarea textarea-bordered h-24 w-full" placeholder="Your valuable review" required></textarea> <br />
                                <input className='btn mt-10' type="submit" value="Add Your Review" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReview;