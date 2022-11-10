import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Header from '../Shared/Header/Header';

const UpdateReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        fetch(`https://shutters-server-theta.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('shutter-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setReviews(data);
            })
            .catch(err => console.error(err))
    }, [user?.email, logOut])
    const handleUpdateReview = (event, id) => {
        event.preventDefault();
        fetch(`https://shutters-server-theta.vercel.app/myreviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('shutter-token')}`
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated successfully!');
                    console.log(data);
                }

            })
    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...reviews };
        newReview[field] = value;
        setReviews(newReview);
        //navigate(from, { replace: true });
    }
    return (
        <div className='bg-slate-500 text-center'>
            <Header></Header>
            <h2 className='font-bold text-3xl my-10 text-white'>Please Update</h2>
            <form onSubmit={handleUpdateReview}>
                <input className='my-10 w-1/2 mx-auto h-44' onChange={handleInputChange} type="text" name='review' placeholder='review' required /> <br />

                <button className='btn' type="submit">Update Review</button>
            </form>
        </div>
    );
};

export default UpdateReview;