import React from 'react';
import { Link } from 'react-router-dom';
import { PiStudentFill } from "react-icons/pi";

const About = () => {

  const cardsData = [
    { title: 'Founders', color: 'bg-blue-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <PiStudentFill   size={36}/> },
    { title: 'Mission', color: 'bg-green-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <PiStudentFill size={36}/> },
    { title: 'History', color: 'bg-yellow-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <PiStudentFill size={36}/> },
    { title: 'Ashram and School', color: 'bg-red-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: <PiStudentFill  size={36}/> }
  ];

  return (

 <section className='bg-gray-100'>


    
    <div className="lg:py-20  max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container ">
    
     <h2 className='text-2xl font-bold font-poppins mb-8'>About Us</h2>

     <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center'>
      {cardsData.map((card, index) => (
        <div key={index} className="">
          <div className={`${card.color} rounded-lg pt-32 px-4 text-center lg:w-[250px] lg:h-[300px] cursor-pointer hover:scale-110`}>

            <div className="flex justify-center">{card.icon}</div> 
               
            <h2 className="text-lg font-semibold mb-2 font-poppins">{card.title}</h2>

            <Link to="/about"> 
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 font-poppins">Read More</button>
            </Link> 
          </div>
        </div>
      ))}
    </div>
    </div>

    </section>
  );
}

export default About;
