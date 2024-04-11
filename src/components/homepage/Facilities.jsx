import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const cardsData = [
    { title: 'Facilities 1', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 2', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 3', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 4', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 5', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 6', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000 
  };


  return (

    <section className='bg-white'>
    <div className="lg:py-28 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
      <h2 className='font-poppins lg:text-2xl mb-4 font-bold'>Facilities</h2>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className=" ">
            <div className={`${card.color} rounded-lg p-8 cursor-pointer shadow-lg mx-2 w-[300px] h-[250px]` }>
              <h2 className="text-lg font-semibold mb-2 font-poppins">{card.title}</h2>
              <p className="text-sm mb-4 font-poppins">{card.content}</p>
         <Link to={'/our-infrastructure'}>   <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black">Read More</button></Link>  
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}

export default Facilities;
