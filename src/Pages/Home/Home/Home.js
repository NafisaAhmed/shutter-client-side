import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='hero min-h-screen'>
            <Banner></Banner>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='absolute top-5 flex justify-between'>
                <Header></Header>
            </div>

            <h2>home</h2>
        </div>
    );
};

export default Home;