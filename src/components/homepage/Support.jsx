import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Support = () => {
  const cardsData = [
    { title: 'Book a Meal', color: 'bg-blue-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Donate for Braillers', color: 'bg-green-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Donate for a Musical Instrument', color: 'bg-yellow-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Donate for Computer System', color: 'bg-red-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Donate for School Uniform/Shoes', color: 'bg-purple-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' },
    { title: 'Donate for Braille Paper', color: 'bg-orange-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit ametLorem ipsum dolor sit amet' },
    { title: 'Sponsor Child Education', color: 'bg-orange-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit ametLorem ipsum dolor sit amet' }
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
      <h2 className='font-poppins lg:text-2xl mb-4 font-bold'>Support Us</h2>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className=" ">
            <div className={`${card.color} rounded-lg p-8 cursor-pointer mx-2 w-[300px] h-[250px]` }>
              <h2 className="text-lg font-semibold mb-2 font-poppins">{card.title}</h2>
            
         <Link to={'/make-donation'}>    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black">Donate Now</button></Link> 
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}

export default Support;
