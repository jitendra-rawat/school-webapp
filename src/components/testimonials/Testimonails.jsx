import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { server } from '../../utils';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4, 
        },
      },
    ],
  };
  useEffect(() => {
    

    axios
      .get(`${server}/tesimonial`)
      .then((response) => {
        console.log(response.data);
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  return (
    <div className="container mx-auto max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mt-8 lg:py-16 ">
      <h3 className="text-2xl lg:text-4xl font-bold text-center">Testimonials</h3>
      <Slider {...sliderSettings}>
        {testimonials.map(({ id, name, designation, testimonial }, index) => (
          <div key={id} className="p-4">
            <div className="bg-white rounded-lg  shadow-md p-6 w-[250px] lg:w-[500px] h-[300px] pt-16">
              <p className="text-gray-600 mb-4">{testimonial}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://via.placeholder.com/50"
                    alt="User Avatar"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-800">{name}</div>
                  <div className="text-gray-600">{designation}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
