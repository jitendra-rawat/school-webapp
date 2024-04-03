// SuccessStories.js

import React from 'react';
import Slider from 'react-slick';

const TestimonialCard = ({ name, company, message, image }) => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md max-w-sm container mx-auto h-[450px]">
      <div className="mb-4">
        {/* Display the testimonial image */}
        <img className="w-full h-48 object-cover rounded-md mb-4" src={image} alt={`Image for ${name}`} />
      </div>

      {/* Testimonial content */}
      <div>
        <p className="text-gray-600 font-roboto">{message}</p>
        <div className="mt-4 flex items-center">
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonialData = [
  {
    id: 1,
    name: 'Ajay Chauhan',
    company: 'Cashier – State Bank of India',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://via.placeholder.com/800x400', 
  },
  {
    id: 2,
    name: 'Mahaveer Prasad Vyas',
    company: 'Cashier – Punjab National Bank',
    message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/800x400', 
  },
  {
    id: 3,
    name: 'Tajveer Singh Rawat',
    company: 'Assistant Group - E',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://via.placeholder.com/800x400', 
  },
  {
    id: 4,
    name: 'Naresh Pal,',
    company: 'Employee – Secretariat, Dehradun',
    message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/800x400', 
  },

  {
    id: 5,
    name: 'Gajendra Singh Chauhan,',
    company: 'III class employee, Indian Railways',
    message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/800x400', 
  },


  {
    id: 4,
    name: 'Sanjay Singh Rawat,',
    company: 'Music Teacher – Central School, Pauri Garhwal',
    message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/800x400', 
  },
];

const Stories = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        },
      },
      
      {
        breakpoint: 1280,  
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536, 
        settings: {
          slidesToShow: 4,  
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <section className="py-20 ">
      <div className="  max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
        <h2 className="text-3xl font-semibold text-center mb-8">Success Stories</h2>

        <Slider {...settings}>
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Stories;
