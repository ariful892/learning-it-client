import React from 'react';
import google from '../../assets/social/google.png';
import github from '../../assets/social/github.png';

const SocialLogin = () => {
    return (
        <div className=' mt-3 mb-3 '>

            <div className='flex items-center w-9/12'>
                <div style={{ height: '1px' }} className='w-1/2 max-w-sm bg-white'>

                </div>
                <p className='text-white mt-2 p-2'>or</p>
                <div style={{ height: '1px' }} className='w-1/2 max-w-sm bg-white'>

                </div>

            </div>

            <div>
                <button
                    // onClick={() => signInWithGoogle()}
                    className='btn bg-sky-400 w-full max-w-xs flex justify-center items-center my-3'>
                    <img height={18} src={google} alt=''></img>
                    <span className='pl-2'>SignIn With Google</span>
                </button>

                <button
                    // onClick={() => signInWithGithub()}
                    className='btn btn-secondary w-full max-w-xs flex justify-center items-center my-5'>
                    <img height={19} src={github} alt=''></img>
                    <span className='pl-2'>SignIn With GitHub</span>
                </button>
            </div>
            {/* {errorElement} */}
        </div>
    );
};

export default SocialLogin;