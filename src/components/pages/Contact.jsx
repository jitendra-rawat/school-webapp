import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { server } from '../../utils';
import axios from 'axios';
import { useAuth } from '../context/authContext';

const Contact = () => {


  const [messageSent, setMessageSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [submitError, setSubmitError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message:''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    let emailError = '';
    let mobileError = '';

    if (name === 'email') {
      if (!emailRegex.test(value)) {
        emailError = 'Please enter a valid email address';
      }
    } else if (name === 'mobile') {
      if (!mobileRegex.test(value)) {
        mobileError = 'Please enter a 10-digit mobile number';
      }
    }

    setEmailError(emailError);
    setMobileError(mobileError);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${server}/contact`,
        formData,
   
      );

      // console.log('Conatct Message sent  successfully:', response.data);

   
      setFormData({
        name: '',
    email: '',
    mobile: '',
    message:''
      });
    } catch (error) {
      console.error('Error sending Contact Message :', error);
      setSubmitError('Please Fill the all fields');
    }


      setMessageSent(true)

  };

  return (
    <div className="pt-16  flex flex-col lg:flex-row items-center justify-between">
      <div className="  py-16 rounded   max-w-sm   md:max-w-2xl lg:max-w-5xl xl:max-w-6xl  flex flex-col lg:flex-row container mx-auto">
      
        {/* Left Section - Contact Details */}
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-2xl lg:text-2xl font-bold mb-4">Contact Details</h2>

          <div className='flex gap-2 items-start py-2'>
            <FaLocationDot size={30} color='orange' />
            <p className="">
              <span className=" text-sm lg:text-base font-roboto"></span> SWAMI AJARANAND ANDH VIDYALAYA HIGH SCHOOL , <br />
              Sapt Sarover, Post-Sadhubela,
              Haridwar Uttarakhand-249410 INDIA
            </p>
          </div>
          <div className='flex gap-2 items-start py-2'>
            <IoIosCall  size={30} color='orange' />
            <p className="">
              <span className=" text-sm lg:text-base font-roboto"></span>0091-1334-260203, 216409, 216410
         
            </p>
          </div>

            <div className='flex gap-2 items-start py-2'>
            < FaEnvelope  size={30} color='orange' />
            <p className="">
              <span className=" text-sm lg:text-base font-roboto"></span>info@ajarblindschool.com
         
            </p>
          </div>

              <div className='flex gap-8 items-center py-8'>
         <p className='opacity-50 text-slate-900 text-sm font-medium '>Socail Media</p>

         <div className='flex gap-2'>
         <a href="https://www.facebook.com/ajarblindschoolharidwar" target='_blank'><FaFacebook color='orange' size={30} /></a>
         <a href="https://www.instagram.com/ajarblindschool/" target='_blank'>< FaInstagram color='orange' size={30} /></a> 
         <a href="https://www.youtube.com/" target='_blank'><FaYoutube color='orange' size={30} /></a>

         </div>
          

          </div>
        </div>




        {/* Right Section - Contact Form */}


        <div className="py-8 lg:py-0 lg:w-1/2">

          <h2 className="text-2xl lg:text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                Name:
              </label>
              <input type="text" id="name" name='name'   onChange={handleChange} value={formData.name} className="mt-1 p-2 w-full border rounded" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                E-mail Address:
              </label>
              <input type="email" id="email" name='email'   onChange={handleChange} value={formData.email} className="mt-1 p-2 w-full border rounded" />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="mobilenumber" className="block text-sm font-semibold text-gray-600">
                Mobile Number
              </label>
              <input type="number" id="mobile" name='mobile'   onChange={handleChange} value={formData.mobile} className="mt-1 p-2 w-full border rounded" />
              {mobileError && <p className="text-red-500">{mobileError}</p>}
            </div>

            <div className="mb-4">
  <label htmlFor="writemessage" className="block text-sm font-semibold text-gray-600">
    Write Message
  </label>
  <textarea
    id="writemessage"
    className="mt-1 p-2 w-full border rounded"
    rows="4"  
    name='message'   onChange={handleChange} value={formData.message}
  ></textarea>
</div>


{submitError && <p className="text-red-500 my-4">{submitError}</p>}

            <button
              type="submit"
              className="bg-orange-500 rounded-3xl text-white py-2 px-4 hover:bg-gray-900 transition-all duration-300"
            >
              Send Message
            </button>



            </form>

     
   
        </div>
      </div>
    </div>
  );
};

export default Contact;
