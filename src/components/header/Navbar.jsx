import React, { useState,  Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import logo from '../assets/logo.png'

import { useAuth } from '../context/authContext';
import Translate from '../Translate';


function Navbar() {

  
  const { accessToken } = useAuth(); 

  const isAuthenticated = accessToken;
 
  const [open, setOpen] = useState(false);


  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="shadow-md  w-full bg-white z-50 ">



   {/* middle navbar */}

      <div className=' py-4 md:pt-4 px-4 max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto container '>

        <div className="flex justify-between  items-center">

          <Link to={'/'}>
           <img className='w-80' src={logo} alt="logo" />
          </Link>

      


 {/* buttons */}
          <div className='flex gap-x-4'>


{/* 
          {!isAuthenticated && (
          <Link to={'/login'}  onClick={() => setDropdownOpen(false)} className="hidden font-roboto  md:block md:text-lg text-[16px] hover:text-orange text-black text-sm font-normal ">

            <button className='bg-orange-500 px-12 py-2 text-white border-2 border-orange rounded-full'>  Login</button>
          
          </Link>
        )} */}


<Link to={'/make-donation'}  onClick={() => setDropdownOpen(false)} className="hidden md:block md:text-lg text-[16px] hover:text-orange text-black text-sm font-normal ">

<button className='bg-orange-500 font-roboto  px-6 py-2 text-white border-2 border-orange rounded-full'>  Donate Here</button>

</Link>

<Translate />




  

   
</div>






   {/* for mobile  */}


   <button
  type="button"
  className="rounded-md bg-white p-2 text- lg:hidden"
  onClick={() => setOpen(true)}
>
  <span className="sr-only">Open menu</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-6 h-6"
    onClick={() => setOpen(true)}  
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
</button>

   <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden " onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed bg-white inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto  pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-12">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-[#FB8B24]"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 size={30} className="relative bottom-2" />
                  </button>
                </div>

                <div   className="space-y-6 border-t border-black p-4 ">
                  <Link to={"/"} className="text-sm font-medium text-gray-900 " onClick={() => setOpen(false)}>
                    Home
                  </Link>

            

                  <div className="flow-root">
                    <Link
                    onClick={() => setOpen(false)}
                      to={"/about"}
                      className="text-sm font-medium text-gray-900 "
                    >
          About Us
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link
                    onClick={() => setOpen(false)}
                      to={"/our-infrastructure"}
                      className="text-sm font-medium text-gray-900 "
                    >
                    Facilities
                    </Link>
                  </div>



              

                  <div className="flow-root">
                    <Link
                    onClick={() => setOpen(false)}
                      to={"/donation"}
                      className="text-sm font-medium text-gray-900 "
                    >
                     Support Us
                    </Link>
                  </div>



                  <div className="flow-root">
                    <Link
                    onClick={() => setOpen(false)}
                      to={"/contact"}
                      className="text-sm font-medium text-gray-900 "
                    >
                    Contact Us
                    </Link>
                  </div>

           
          


          


                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>





        </div>
      </div>


      {/* bottom navbar */}


      <div className=' py-2   max-w-md md:max-w-2xl lg:max-w-5xl  mx-auto container  '>


      <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-6">
          
            

      <Link to={'/'}  onClick={() => setDropdownOpen(false)} className="font-poppins text-orange-500   lg:text-lg  hover:text-orange  text-sm font-bold  ">
Home
          </Link>

        
      <Link to={'/about'}  onClick={() => setDropdownOpen(false)} className="font-poppins text-orange-500   lg:text-lg  hover:text-orange  text-sm font-bold  ">
     About us
          </Link>

   

   
          <Link to={'/our-infrastructure'}  onClick={() => setDropdownOpen(false)} className="font-poppins text-orange-500   lg:text-lg  hover:text-orange  text-sm font-bold  ">
    Facilities
          </Link>


     


          <Link to={'/donation'}  onClick={() => setDropdownOpen(false)} className="font-poppins text-orange-500   lg:text-lg  hover:text-orange  text-sm font-bold  ">
      Support Us
          </Link>





          <Link to={'/from-the-desk-of-swamiji'}  onClick={() => setDropdownOpen(false)} className="font-poppins text-orange-500  lg:text-lg  hover:text-orange  text-sm font-bold ">
  From the Desk of Swamiji
          </Link>


          <Link to={'/contact'}  onClick={() => setDropdownOpen(false)} className="font-poppins text-orange-500   lg:text-lg  hover:text-orange text-sm font-bold  ">
   Contact Us
          </Link>


     
     

          {isAuthenticated && (
        <Link to={'/dashboard'}  onClick={() => setDropdownOpen(false)} className=" lg:text-lg font-poppins text-orange-500     hover:text-orange text-sm font-bold ">
          Admin Dashboard
        </Link>
      )}



{!isAuthenticated && (
          <Link to={'/login'}  onClick={() => setDropdownOpen(false)} className="hidden font-roboto  md:block md:text-lg text-[16px] hover:text-orange text-black text-sm font-normal ">

            <button className='lg:text-lg font-poppins text-orange-500     hover:text-orange text-sm font-bold '>  Login</button>
          
          </Link>
        )} 





 
        </div>

      </div>



    </nav>
  );
}

export default Navbar;
