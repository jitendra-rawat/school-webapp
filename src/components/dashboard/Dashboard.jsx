import React, { useState } from 'react';
import { FaHome, FaUser } from 'react-icons/fa';
import { PiBagFill } from 'react-icons/pi';
import { MdReviews } from 'react-icons/md';
import { LuPencilLine } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import DashboardContent from './DashboardContent';
import DonationContent from './DonationContent';
import MakeDonationContent from './MakeDonationContent';
import Testimonial from './Testimonials';
import WriteTestimonial from './WriteTestimonials';

import { MdOutlineLockReset } from "react-icons/md";
import Logout from './Logout';
import { CiLogout } from "react-icons/ci";
import ResetPassword from './ResetPassword';
import Messages from './Messages'
import AddCategory from './AddCategory';

const Dashboard = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const [selectedButton, setSelectedButton] = useState('dashboard');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 'dashboard':
        return <DashboardContent />;
      case 'donation':
        return <DonationContent />;
      case 'makedonation':
        return <MakeDonationContent />;
        case 'messages':
          return <Messages />;

          case 'addCategory':
            return <AddCategory />;

      case 'testimonials':
        return <Testimonial />;
      case 'writetestimonials':
        return <WriteTestimonial />;
      case 'resetpassword':
        return <ResetPassword />;
        case 'logout':
          return <Logout />;


      default:
        return null;
    }
  };

  return (
    <section className=' bg-[#F8F9FA]  py-8'>
      <div className='flex flex-wrap lg:flex-wrap-none xl:flex-wrap xl:justify-start lg:gap-x-4  max-w-sm md:max-w-2xl  lg:max-w-4xl xl:max-w-7xl 2xl:max-w-9xl mx-auto container '>
        {/* left side */}
        <div>
          {/* tabs */}
          <div className='pt-12  lg:pt-20 flex-col lg:flex-row  space-y-6'>
            {/* Dashboard Button */}
            <div
              className={`w-full  lg:w-[200px] flex gap-2 items-center rounded-xl px-32 md:px-72 py-4 lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'dashboard' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleButtonClick('dashboard')}
            >
              <FaHome size={30} color='orange' />
              <p className='text-sm font-bold'>Dashboard</p>
            </div>

            {/* donation Button */}
            <div
              className={`w-full lg:w-[200px] flex gap-2 items-center rounded-xl md:px-72  px-32 py-4  lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'donation' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleButtonClick('donation')}
            >
              <FaUser size={30} color='orange' />
              <p className='text-sm font-bold'>Donations</p>
            </div>

            {/* make donation Button */}
            <div
              className={`w-full lg:w-[200px] flex gap-2 items-center rounded-xl md:px-72  px-32 py-4  lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'makedonation' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleButtonClick('makedonation')}
            >
              <PiBagFill size={30} color='orange' />
              <p className='text-sm font-bold'>Make Donation</p>
            </div>


            {/* messages section */}


            <div
              className={`w-full lg:w-[200px] flex gap-2 items-center rounded-xl md:px-72  px-32 py-4  lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'messages' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleButtonClick('messages')}
            >
              <MdReviews size={30} color='orange' />
              <p className='text-sm font-bold'>Messages</p>
            </div>


             {/* add category */}


             <div
              className={`w-full lg:w-[200px] flex gap-2 items-center rounded-xl md:px-72  px-32 py-4  lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'addCategory' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleButtonClick('addCategory')}
            >
              <MdReviews size={30} color='orange' />
              <p className='text-sm font-bold'>Add Donation Category</p>
            </div>




            {/* testimonails section */}
            <div
              className={`w-full lg:w-[200px] flex gap-2 items-center rounded-xl md:px-72  px-32 py-4  lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'testimonials' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleButtonClick('testimonials')}
            >
              <MdReviews size={30} color='orange' />
              <p className='text-sm font-bold'>Testimonials</p>
            </div>

            {/* write testimonials section */}
            <div
              className={`w-full lg:w-[200px] flex gap-2 items-center rounded-xl md:px-72  px-32 py-4  lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'writetestimonials' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleButtonClick('writetestimonials')}
            >
              <LuPencilLine size={30} color='orange' />
              <p className='text-sm font-bold'>Write Testimonials</p>
            </div>

            {/* reset password */}
            <div
              className={`w-full lg:w-[200px] flex gap-2 items-center rounded-xl md:px-72  px-32 py-4  lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'resetpassword' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => handleButtonClick('resetpassword')}
            >
              <MdOutlineLockReset  size={30} color='orange' />
              <p className='text-sm font-bold'>Reset Password</p>
            </div>

    {/* logout */}

    <div
              className={`w-full lg:w-[200px] flex gap-2 items-center rounded-xl md:px-72  px-32 py-4  lg:p-2 border-2 border-orange cursor-pointer ${
                selectedButton === 'logout' ? 'bg-orange-500 text-white' : ''
              }`}
              onClick={() => { handleButtonClick('logout'); handleLogout(); }}
            >
              <CiLogout  size={30} color='orange' />
              <p className='text-sm font-bold'>Logout</p>
            </div>


          </div>
        </div>

        {/* right side */}
        <div className='max-w-5xl container mx-auto'>
          {/* <div className='flex justify-end'>
            <button onClick={handleLogout} className='px-8 py-2 bg-orange rounded-xl text-white'>
              Logout
            </button>
          </div> */}
          <div>{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
