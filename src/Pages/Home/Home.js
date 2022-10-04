import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-primary text-white'>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;