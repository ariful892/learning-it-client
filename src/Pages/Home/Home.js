import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Courses from './Courses';

const Home = () => {
    return (
        <div className='bg-primary text-white'>
            <Banner></Banner>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;