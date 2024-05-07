import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import ins from '../assets/ins.jpg'
import computer from '../assets/computer.png'
import edu from '../assets/edu.png'
import brail from '../assets/about.jpg'

import braillbooks from '../assets/braillebooks.png'



const Support = () => {
  const cardsData = [
    { 
      title: 'Book a Meal',
      color: 'bg-blue-200',
      image: 'https://images.unsplash.com/photo-1530912585210-7916cd026e59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGQlMjBlYXRpbmclMjBmb29kfGVufDB8fDB8fHww' 
    },
    { 
      title: 'Donate for Braillers',
      color: 'bg-green-200',
      image: braillbooks
    },
   
    { title: 'Donate for a Musical Instrument', color: 'bg-yellow-200', image:ins },
  
   { title: 'Donate for Computer System', color: 'bg-red-200', image:computer },

   { title: 'Donate for School Uniform/Shoes', color: 'bg-purple-200', image: 'https://cdn.pixabay.com/photo/2014/04/02/14/48/children-306607_1280.jpg' },

    { title: 'Donate for Braille Paper', color: 'bg-orange-200', image: brail },


   { title: 'Sponsor Child Education', color: 'bg-orange-200', image:edu }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  return (

    <section className='bg-gray-100'>
    <div className="py-10 lg:py-20 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
      <h2 className='font-poppins lg:text-2xl mb-4 font-bold '>Support Us</h2>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className=" ">
            <div className={`mt-10 border border-gray-300 rounded-xl p-4 cursor-pointer mx-2 w-[300px] h-[450px]` }>
              <h2 className="text-base font-semibold mb-2 font-poppins text-center">{card.title}</h2>
              <img src={card.image} alt={card.title} className="w-[300px] h-[300px] rounded-xl object-cover mb-8" /> 
              <Link to={'/make-donation'} className='flex justify-center my-auto '>    
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black">Donate Now</button>
              </Link> 
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}

export default Support;
