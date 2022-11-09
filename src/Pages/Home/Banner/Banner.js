import React from 'react';
import img1 from '../../../images/banner/img1.png';
import img2 from '../../../images/banner/img2.png';
import img3 from '../../../images/banner/img3.png';
import Slider from './Slider';

const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    }
]
const Banner = () => {
    return (
        <div className='carousel w-full'>
            {
                bannerData.map(slide => <Slider
                    key={slide.id}
                    slide={slide}
                ></Slider>)
            }
        </div>
    );
};

export default Banner;