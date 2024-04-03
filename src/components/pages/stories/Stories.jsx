import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';

const testimonials = [
  {
    name: 'Ajay Chauhan',
    designation: 'Cashier – State Bank of India',
    review:
      'Ajay Chauhan, born as the son of Mr. Baldev Singh of Baluakot, Gaja, Tehri garhwal on 15th February, 1988. He joined our school, Ajar Blind School, on 2nd July, 1996. He was always modest and studious. He was respectful towards his teachers. He has been in touch with the school ever since he graduated from our school. Now he is working as a Cashier in State Bank of India, Rajasthan. We wish him a successful career and life ahead.'
  },
  {
    name: 'Mahaveer Prasad Vyas',
    designation: 'Cashier – Punjab National Bank',
    review:
      'Mahaveer Prasad Vyas, son of Mr. Ramchandra Vyas of Uttarkashi, was born on 10th February, 1982. He won love of his teachers by his simplicity and hard work. He joined our school on 17th August, 1990. He has never been dependant on the support of others and has worked hard to stand on his own feet. Currently he is working in Punjab National Bank, Uttarkashi on the post of Cashier.'
  },

  {
    name: 'Tajveer Singh Rawat',
    designation: 'Assistant Group - E',
    review:
      'Tajveer Singh Rawat was born on 12th May, 1974 as the son of Mr. Shyam Singh Rawat of Lansdowne, Garhwal. He was a brave and hard working student. He joined us on 1st May, 1988 and graduated from our school in 1991. He has constantly been in touch ever since. He was always very patriotic and wanted to serve his nation in any way he could. Currently he is working in Indian Navy, Mumbai as an Assistant, Group – E.'
  },
  {
    name: 'Naresh Pal',
    designation: 'Employee – Secretariat, Dehradun',
    review:
      'Naresh Kumar Pal was born as the son of Mr. Bal Mukund Pal of Nainital on 10thJuly, 1986. He joined our school on 20th July, 1994. He was a studious and model student. He was modest and respectful towards his teachers. He has always kept us informed about his progress, ups and downs in his life and participated in school’s events. Currently he is working in the Secretariat in Dehradun, Uttarakhand.'
  },
  {
    name: 'Gajendra Singh Chauhan',
    designation: 'III class employee, Indian Railways',
    review:
      'Gajendra Singh Chauhan, son of Mr. Veerndra Kumar of Bijnor, Uttar Pradesh, was born on 10th September, 1982. He joined us on 2nd July, 1988. He has always shown independence and a spirit of hard work. He was always supportive towards his fellows in the school and respectful towards his teachers. His was good in studies and an excellent student. Currently he is working as a III Grade officer in Indian Railways, Delhi.'
  },
  {
    name: 'Sanjay Singh Rawat',
    designation: 'Music Teacher – Central School, Pauri Garhwal',
    review:
      'Sanjay Singh Rawat was born on 3rd April, 1984 as the son of Mr. Gabbar Singh of Pauri Garhwal. He was a hard working student. He joined our school on 17th August, 1992. He was always helpful and kind. He believed in spreading knowledge. He had a special love for music and he made it into a career. Currently he is working as a Music Teacher in Central School, Shri Nagar, Pauri Garhwal.'
  },

];

const Testimonials = () => {


  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true, 
    autoplaySpeed: 2000,
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

  return (
    <div className="container mx-auto max-w-6xl mt-8 py-8 ">

   
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-6 lg:w-[500px] lg:h-[350px] pt-16">

            <div className="flex items-center">
               
               <div className="">
                 <div className=" text-orange-500 text-xl  font-bold ">
                   {testimonial.name}
                 </div>
                 <div className="py-2 text-black text-base font-normal ">{testimonial.designation}</div>
               </div>
             </div>
              <p className=" text-black text-sm  font-normal mb-4 text-justify">{testimonial.review}</p>
         
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
