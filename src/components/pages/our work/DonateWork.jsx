import React from 'react'
import Slider from 'react-slick';


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
  

const cardData = [
    {
      id: 1,
      imageSrc: 'https://placehold.co/400',
      heading: 'Fundraiser for the Study Material',
      buttonText: 'Donate Now',
    },
    {
      id: 2,
      imageSrc: 'https://placehold.co/400',
      heading: 'Fundraiser for the Food',
      buttonText: 'Donate Now',
    },
    {
        id: 3,
        imageSrc: 'https://placehold.co/400',
        heading: 'Fundraiser for the Computers',
        buttonText: 'Donate Now',
      },
      {
        id: 4,
        imageSrc: 'https://placehold.co/400',
        heading: 'Donate for the Education Sponsorship',
        buttonText: 'Donate Now',
      },
    
  ];

const DonateWork = () => {
  return (

    <>
    
    <section className='py-10 xl:py-20 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto container'>
      <div className=" text-gray-800 text-lg xl:text-5xl font-bold  capitalize leading-[57.60px] text-center xl:my-8">Donate for the cause</div>
      <Slider {...settings}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.imageSrc}
            heading={card.heading}
            buttonText={card.buttonText}
          />
        ))}
      </Slider>
    </section>

    </>
  )
}



const Card = ({ imageSrc, heading, buttonText }) => {
    return (

        <div className="relative max-w-sm mx-auto overflow-hidden shadow-lg rounded-md">
        <img className="w-[373px] h-[293px] object-cover" src={imageSrc} alt="Card" />
  
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 p-4 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
            <mask id="path-1-inside-1_337_674" fill="white">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.88909 2.11091C-0.258796 4.2588 -0.258796 7.7412 1.88909 9.88909L10.0208 18.0208C10.4113 18.4113 11.0445 18.4113 11.435 18.0208L11.4448 18.011C11.5583 17.9624 11.6647 17.8917 11.7574 17.799L19.8891 9.66726C22.037 7.51938 22.037 4.03697 19.8891 1.88909C17.7412 -0.258796 14.2588 -0.258796 12.1109 1.88909L10.7782 3.22182L9.66726 2.11091C7.51938 -0.0369717 4.03697 -0.036972 1.88909 2.11091Z"/>
            </mask>
            <path d="M11.4448 18.011L10.6565 16.173L10.3027 16.3247L10.0306 16.5968L11.4448 18.011ZM11.7574 17.799L10.3431 16.3848L10.3431 16.3848L11.7574 17.799ZM19.8891 9.66726L21.3033 11.0815L19.8891 9.66726ZM12.1109 1.88909L10.6967 0.474873L12.1109 1.88909ZM10.7782 3.22182L9.36396 4.63604L10.7782 6.05025L12.1924 4.63604L10.7782 3.22182ZM3.3033 8.47487C1.93647 7.10804 1.93647 4.89196 3.3033 3.52513L0.474874 0.696698C-2.45406 3.62563 -2.45406 8.37437 0.474875 11.3033L3.3033 8.47487ZM11.435 16.6066L3.3033 8.47487L0.474875 11.3033L8.6066 19.435L11.435 16.6066ZM10.0208 16.6066C10.4113 16.2161 11.0445 16.2161 11.435 16.6066L8.6066 19.435C9.77818 20.6066 11.6777 20.6066 12.8492 19.435L10.0208 16.6066ZM10.0306 16.5968L10.0208 16.6066L12.8492 19.435L12.859 19.4253L10.0306 16.5968ZM10.3431 16.3848C10.4332 16.2947 10.5402 16.2228 10.6565 16.173L12.2331 19.8491C12.5764 19.7019 12.8961 19.4887 13.1716 19.2132L10.3431 16.3848ZM18.4749 8.25305L10.3431 16.3848L13.1716 19.2132L21.3033 11.0815L18.4749 8.25305ZM18.4749 3.3033C19.8417 4.67014 19.8417 6.88621 18.4749 8.25305L21.3033 11.0815C24.2322 8.15255 24.2322 3.40381 21.3033 0.474874L18.4749 3.3033ZM13.5251 3.3033C14.892 1.93647 17.108 1.93647 18.4749 3.3033L21.3033 0.474874C18.3744 -2.45406 13.6256 -2.45406 10.6967 0.474873L13.5251 3.3033ZM12.1924 4.63604L13.5251 3.3033L10.6967 0.474873L9.36396 1.80761L12.1924 4.63604ZM8.25305 3.52513L9.36396 4.63604L12.1924 1.80761L11.0815 0.696698L8.25305 3.52513ZM3.3033 3.52513C4.67014 2.15829 6.88621 2.15829 8.25305 3.52513L11.0815 0.696698C8.15254 -2.23223 3.40381 -2.23223 0.474874 0.696698L3.3033 3.52513Z" fill="white" mask="url(#path-1-inside-1_337_674)"/>
          </svg>
          <div className="px-6 text-white text-sm font-medium ">{buttonText}</div>
        </div>
  
        <div className="py-12">
          <h2 className="text-xl font-semibold mb-2 text-center">{heading}</h2>
        </div>
      </div>
    );
  };

export default DonateWork