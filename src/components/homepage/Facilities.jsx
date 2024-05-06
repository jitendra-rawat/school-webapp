import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const cardsData = [
    { title: 'Free Education', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Hostel', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Mess and Kitchen', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Braille press and Library', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Vocational Education', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Computer Lab', color: 'bg-gray-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
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
    <section className='bg-white'>
      <div className="py-10 lg:py-28 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
        <h2 className='font-poppins lg:text-2xl mb-4 font-bold'>Facilities</h2>
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index} className=" ">
              <div className={`${card.color} flex flex-col justify-center rounded-lg p-8 cursor-pointer shadow-lg mx-2 w-full md:w-[300px] h-[250px]`}>
                <h2 className="text-lg font-semibold mb-2 font-poppins text-center">{card.title}</h2>
                {/* <p className="text-sm mb-4 font-poppins">{card.content}</p> */}

                <div className='flex justify-center items-center'>
                <Link to={'/our-infrastructure'}><button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black">Read More</button></Link>
                </div>
               
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Facilities;
