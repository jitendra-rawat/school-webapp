import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import image from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

import { server } from '../../utils';


const Login = () => {

  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  

  const handleLogin = async (e) => {
    e.preventDefault();

    
    try {
      const response = await axios.post(
        `${server}/auth/adminlogin`,
        {
          email: email,
          password: password,
        }
      );

      // console.log('Login successful:', response.data);

      login(response.data.access_token);

      navigate('/dashboard')
    
      
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Invalid email or password'); 
      setEmail('')
      setPassword('')
    }
  };

  return (
    <div className=' py-8 flex flex-col-reverse lg:flex-row justify-between items-center max-w-sm  md:max-w-lg lg:max-w-4xl xl:max-w-7xl container mx-auto'>
      {/* left section */}
      <div className='flex items-center justify-center max-w-sm mx-auto container px-4 sm:px-6 lg:px-8 lg:w-1/2'>
        <div className=''>
          <div>
            <h2 className='mt-6 text-2xl lg:text-4xl font-extrabold text-gray-900 text-center lg:text-left'>
              Login with Admin
            </h2>
          </div>

          <form
            onSubmit={handleLogin}
            className='mt-8 space-y-6'
          >
            <div className='rounded-md shadow-sm '>
              
              <div className='py-2'>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className='appearance-none rounded-none relative block w-[300px] lg:w-[400px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className='appearance-none rounded-none relative block w-[300px] lg:w-[400px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>

            {errorMessage && ( // Conditionally render error message
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <div className='  '>
              <button
                type='submit'
                className='group bg-orange-500 rounded-full relative w-[300px] lg:w-[400px]   flex justify-center py-2 px-4 border border-transparent text-sm font-medium  text-white   focus:outline-none '
              >
                Login
              </button>
            </div>
          </form>

      
        </div>
      </div>

      {/* right section */}
      <div className=' py-4 lg:py-0 lg:w-1/2 max-w-md container mx-auto'>
        <img className='w-80 h-60 object-contain lg:w-full lg:h-auto lg:object-cover' src={image} alt='login' />
      </div>
    </div>
  );
};

export default Login;
