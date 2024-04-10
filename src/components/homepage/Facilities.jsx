import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Facilities = () => {
  const cardsData = [
    { title: 'Facilities 1', color: 'bg-blue-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 2', color: 'bg-green-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 3', color: 'bg-yellow-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 4', color: 'bg-red-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 5', color: 'bg-purple-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Facilities 6', color: 'bg-orange-200', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (

    <section className='bg-gray-100'>
    <div className="lg:py-28 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
      <h2 className='font-poppins lg:text-2xl mb-4 font-bold'>Facilities</h2>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className=" ">
            <div className={`${card.color} rounded-lg p-4 cursor-pointer mx-2` }>
              <h2 className="text-lg font-semibold mb-2 font-poppins">{card.title}</h2>
              <p className="text-sm mb-4 font-poppins">{card.content}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black">Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}

export default Facilities;
