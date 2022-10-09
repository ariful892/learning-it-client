import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const CourseBooking = () => {

    const { id } = useParams();
    const [course, setCourse] = useState({});

    const { isLoading, error, data } = useQuery('course', () =>
        fetch(`http://localhost:5000/course/${id}`).then(res =>
            res.json()
        ));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data.img} className="w-60 lg:w-96 rounded-lg shadow-2xl" alt='course' />
                <div className='mx-5'>
                    <h1 className="text-5xl text-primary font-bold mb-1">{data.name}</h1>
                    <p className="py-1 text-justify">{data.description}</p>
                    <p className="py-1">Available Seat: {data.quantity}</p>
                    <p className="py-1">Course Fee: ${data.price}</p>
                    <button className="btn btn-primary my-2">Confirm Booking</button>
                </div>
            </div>
        </div>
    );
};

export default CourseBooking;