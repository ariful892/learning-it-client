import React from 'react';

const Course = ({ course }) => {

    const { name, img, author, quantity, price, description } = course;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 flex-col">
                <img src={img} alt="Shoes" class="rounded-xl " />
                <p className='text-primary font-bold text-xl relative'>${price}</p>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-black">{name}</h2>
                <p className='text-black'>Instructor: {author}</p>
                <p className='text-black'>Available Quantity: {quantity}</p>
                <div class="card-actions">
                    <button class="btn btn-accent">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;