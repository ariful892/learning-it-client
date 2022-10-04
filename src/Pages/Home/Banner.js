import React from 'react';
import banner from '../../assets/learning.jpg';

const Banner = () => {
    return (
        <div class="hero lg:min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="w-80 rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl text-warning font-bold">Learning IT!</h1>
                    <p class="py-6 pr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-secondary text-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;