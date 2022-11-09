import React from 'react';
import './Slider.css'

const Slider = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img className='w-full slider' src={image} alt='' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className='absolute flex justify-center left-24 top-1/3 text-white'>
                <h1 className='text-4xl font-bold'>Hire A PHOTOGRAPHER <br />
                    <span className='text-3xl font-semibold'>For Any Event, Anywhere in Bangladesh</span></h1>
            </div>
            <div className='absolute flex justify-center left-24 top-1/2 text-white'>
                <p className='hidden lg:flex'>Welcome to our website. Explore our dream. Here you can get varity of photographers who works very amazingly.The majority of today’s <br /> photobooks are often constructed in similar ways. They often begin with an essay written by a writer, curator, critic, or similar, who in some <br /> way illuminates the work and the photographer – a text that, among other things, guides the reader through their experience of the work.....</p>
            </div>
        </div>
    );
};

export default Slider;