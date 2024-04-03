import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from '../assets/hero.png'

const Header = () => {


  const [headings, setHeadings] = useState([
    'The eyes may be blind, but the heart sees all.',
    'In darkness, find the light within.',
    'Blindness hides the eyes, not the soul.',
  
  ]);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [headings]);

  return (

    <section className="custom-bg lg:h-screen w-full pt-20">


  
    <div className=" lg:py-[30px] text-white lg:p-8 flex flex-col-reverse lg:flex-row lg:justify-between items-center max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container ">
     
 {/* left section */}

      <div className="py-8  lg:w-1/2 ">
  
       
      <AnimatePresence exitBeforeEnter={false}>
            <motion.div
              key={currentHeadingIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              mode="wait"
              className="absolute  "
            >
              <div className="xl:w-[600px]  text-black font-sans  text-4xl leading-10 lg:text-[50px] font-extrabold lg:leading-[60px]">
                {headings[currentHeadingIndex]}
              </div>
            </motion.div>
          </AnimatePresence>




     <div className='flex py-6 mt-28 '>

    
     <Link to={'/donation-page'}>

     <div class="w-[202.78px] h-[65.78px] px-[42px] py-5 bg-orange-500 rounded-full border border-white justify-center items-center gap-2.5 inline-flex">
     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
  <mask id="path-1-inside-1_337_3441" fill="white">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.38909 2.11091C0.241204 4.2588 0.241204 7.7412 2.38909 9.88909L10.5208 18.0208C10.9113 18.4113 11.5445 18.4113 11.935 18.0208L11.9448 18.011C12.0583 17.9624 12.1647 17.8917 12.2574 17.799L20.3891 9.66726C22.537 7.51938 22.537 4.03697 20.3891 1.88909C18.2412 -0.258796 14.7588 -0.258796 12.6109 1.88909L11.2782 3.22182L10.1673 2.11091C8.01938 -0.0369717 4.53697 -0.036972 2.38909 2.11091Z"/>
  </mask>
  <path d="M2.38909 9.88909L3.8033 8.47487L2.38909 9.88909ZM10.5208 18.0208L9.1066 19.435L10.5208 18.0208ZM11.9448 18.011L11.1565 16.173L10.8027 16.3247L10.5306 16.5968L11.9448 18.011ZM12.2574 17.799L10.8431 16.3848L10.8431 16.3848L12.2574 17.799ZM20.3891 9.66726L21.8033 11.0815L20.3891 9.66726ZM12.6109 1.88909L11.1967 0.474873L12.6109 1.88909ZM11.2782 3.22182L9.86396 4.63604L11.2782 6.05025L12.6924 4.63604L11.2782 3.22182ZM3.8033 8.47487C2.43647 7.10804 2.43647 4.89196 3.8033 3.52513L0.974874 0.696698C-1.95406 3.62563 -1.95406 8.37437 0.974875 11.3033L3.8033 8.47487ZM11.935 16.6066L3.8033 8.47487L0.974875 11.3033L9.1066 19.435L11.935 16.6066ZM10.5208 16.6066C10.9113 16.2161 11.5445 16.2161 11.935 16.6066L9.1066 19.435C10.2782 20.6066 12.1777 20.6066 13.3492 19.435L10.5208 16.6066ZM10.5306 16.5968L10.5208 16.6066L13.3492 19.435L13.359 19.4253L10.5306 16.5968ZM10.8431 16.3848C10.9332 16.2947 11.0402 16.2228 11.1565 16.173L12.7331 19.8491C13.0764 19.7019 13.3961 19.4887 13.6716 19.2132L10.8431 16.3848ZM18.9749 8.25305L10.8431 16.3848L13.6716 19.2132L21.8033 11.0815L18.9749 8.25305ZM18.9749 3.3033C20.3417 4.67014 20.3417 6.88621 18.9749 8.25305L21.8033 11.0815C24.7322 8.15255 24.7322 3.40381 21.8033 0.474874L18.9749 3.3033ZM14.0251 3.3033C15.392 1.93647 17.608 1.93647 18.9749 3.3033L21.8033 0.474874C18.8744 -2.45406 14.1256 -2.45406 11.1967 0.474873L14.0251 3.3033ZM12.6924 4.63604L14.0251 3.3033L11.1967 0.474873L9.86396 1.80761L12.6924 4.63604ZM8.75305 3.52513L9.86396 4.63604L12.6924 1.80761L11.5815 0.696698L8.75305 3.52513ZM3.8033 3.52513C5.17014 2.15829 7.38621 2.15829 8.75305 3.52513L11.5815 0.696698C8.65254 -2.23223 3.90381 -2.23223 0.974874 0.696698L3.8033 3.52513Z" fill="white" mask="url(#path-1-inside-1_337_3441)"/>
</svg>
  <div class="text-white font-roboto  text-sm font-medium ">Donate Now</div>
</div>
     
      </Link>
       </div>
   
   
      </div>


{/* right dection */}


<div className='py-6 lg:w-1/2 '>
<img class="w-full lg:w-[500px] lg:h-[450px] rounded-tr-[20px] rounded-bl-[20px] " src={image} />
</div>

 
    </div>

    </section>
  );
};

export default Header;
