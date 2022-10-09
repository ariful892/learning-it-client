import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    const { _id, name, img, author, quantity, price } = course;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="w-100 px-10 pt-10 flex flex-col ">
                <img src={img} alt="Shoes" className="rounded-xl " />
                <p className=' text-primary font-bold text-xl text-right'>${price}</p>
            </figure>
            <div className="card-body items-center text-center pt-5">
                <h2 className="card-title text-black">{name}</h2>
                <p className='text-black'>Instructor: {author}</p>
                <p className='text-black'>Available Quantity: {quantity}</p>
                <div className="card-actions mt-3">
                    <Link to={`/booking/${_id}`} className="btn btn-accent">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Course;