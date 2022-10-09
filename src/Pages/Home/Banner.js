import React from 'react';
import banner from '../../assets/learning.jpg';

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen lg:px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="w-60 lg:w-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-warning font-bold">Learning IT!</h1>
                    <p className="py-6 lg:pr-10">Learning IT is like a career advisor, we guide you through each step. You’ll learn the right thing at the right time, all in one place.</p>
                    <button className="btn btn-secondary text-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;