import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Support = () => {
  const cardsData = [
    { title: 'Support 1', color: 'bg-blue-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Support 2', color: 'bg-green-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Support 3', color: 'bg-yellow-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Support 4', color: 'bg-red-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Support 5', color: 'bg-purple-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Support 6', color: 'bg-orange-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit ametLorem ipsum dolor sit amet' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000 
  };


  return (

    <section className='bg-gray-100'>
    <div className="lg:py-20 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
      <h2 className='font-poppins lg:text-2xl mb-4 font-bold'>Support Us</h2>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className=" ">
            <div className={`${card.color} rounded-lg p-8 cursor-pointer mx-2 w-[300px] h-[250px]` }>
              <h2 className="text-lg font-semibold mb-2 font-poppins">{card.title}</h2>
              <p className="text-sm mb-4 font-poppins text-justify">{card.content}</p>
         <Link to={'/donation'}>    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black">Read More</button></Link> 
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}

export default Support;
