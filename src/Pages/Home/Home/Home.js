import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Services from '../../Services/LimitedServices';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Teams from '../Teams';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <div className='hero min-h-screen'>
                <Banner></Banner>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='absolute top-5 flex justify-between'>
                    <Header></Header>
                </div>
            </div>
            <Services></Services>
            <Teams></Teams>

        </div>
    );
};

export default Home;