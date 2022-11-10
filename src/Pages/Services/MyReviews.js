import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Header from '../Shared/Header/Header';
import MyReviewDetails from './MyReviewDetails';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user, logOut } = useContext(AuthContext);
    console.log(user.email);
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
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

    const handleDelete = id => {


        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('shutter-token')}`
            },
            /*body: JSON.stringify(orders) */
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully!!');
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                }
            })

    }
    return (
        <div className='bg-stone-400'>
            <Header></Header>
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">

                <div className="flex flex-col overflow-x-auto text-xs">
                    <div className="flex text-left bg-gray-300">
                        <div className="w-28 px-2 py-3 sm:p-3">Delete Review</div>
                        <div className="w-36 px-2 py-3 sm:p-3">Service Name</div>
                        <div className="flex-1 px-2 py-3 sm:p-3">Review</div>
                        <div className="hidden w-32 px-2 py-3 text-right sm:p-3 sm:block">Edit Review</div>
                    </div>
                    <div>
                        {
                            reviews.length === 0 ?
                                <h1 className='text-center text-white text-3xl mt-10'>No reviews were added</h1>
                                :
                                reviews.map(review => <MyReviewDetails
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}

                                ></MyReviewDetails>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyReviews;