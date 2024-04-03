import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ActivitiesCarousel = () => {
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

  const placeholderImages = [
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/400x400',
   
  ];

  return (
    <Slider {...settings}>
      {placeholderImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Placeholder ${index + 1}`} className="w-[400px] xl:w-[350px] h-auto py-4  " />
        </div>
      ))}
    </Slider>
  );
};

export default ActivitiesCarousel;
