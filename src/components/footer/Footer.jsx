// Footer.js

import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-20">
      <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container flex flex-col lg:flex-row lg:space-x-2 justify-between px-4">
        {/* First Section: Logo,  */}

      
        <div className="py-2 lg:py-0 ">

          <p className="mb-4 w-[371px] text-white text-sm font-normal  leading-normal">Swami Ajaranand Andh Vidyalaya High School is a nurturing institution providing specialized education to visually impaired students, fostering excellence and inclusivity through dedicated guidance and support</p>
   
          <div className="flex space-x-4">
            <a target='_blank' href="https://www.facebook.com/ajarblindschoolharidwar"  className="text-white hover:text-gray-300">
            <FaFacebook  size={20}/>
            </a>
            <a target='_blank' href="https://www.instagram.com/ajarblindschool/" className="text-white hover:text-gray-300">
            <FaInstagram size={20 } />
            </a>

            <a href="https://www.youtube.com/" className="text-white hover:text-gray-300">
            <FaYoutube size={20} />
            </a>
          </div>
        </div>


        {/* right Section: Contact Details */}
        <div className='py-2 lg:px-2 lg:py-0'>
          <h4 className="text-lg font-semibold mb-2">Contact Details</h4>
          <p className='py-1 text-white text-sm font-normal'>Email: info@ajarblindschool.com</p>
          <p className='py-1 text-white text-sm font-normal'>Phone: 0091-1334-260203, 216409, 216410</p>
          <p className='py-1 w-[325px]  text-white text-sm font-normal  leading-snug'>Address: SWAMI AJARANAND ANDH VIDYALAYA HIGH SCHOOLSapt Sarover, Post-Sadhubela,Haridwar Uttarakhand-249410 INDIA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
