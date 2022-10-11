import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/login-bg.png';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    return (
        <div
            style={{ background: `url(${bg})` }}
            className="min-h-screen py-32 pl-16">
            <div className='w-1/2'>
                <h2 className='text-accent text-3xl uppercase'>Login</h2>
                <form className='mt-8' >
                    <input className='input input-bordered input-warning w-full max-w-xs block my-3' type="email" name="email" placeholder='Your Email' required />
                    <input className='input input-bordered input-warning w-full max-w-xs block my-3' type="password" name="password" placeholder='Password' required />
                    <input className='btn btn-accent text-white w-full max-w-xs my-3' type="submit" value="Login" />
                </form>
                {/* {errorMessage} */}
                <p className='m-0  text-white text-md'>New to LearningIT?
                    <Link className='text-accent text-sm ml-1' to='/register'>Please Register</Link>
                </p>
                <p className='mt-2 text-white'>Forget Password?<button className='ml-1 text-red-500 text-sm' >Reset Password</button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;