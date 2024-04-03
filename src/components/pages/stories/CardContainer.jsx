import React from 'react';



const Card = ({ imageSrc, title, subtitle }) => {
    return (
      <div className="bg-white rounded-md shadow-md px-4 py-6 mb-6 md:w-[450px] h-[450px]  lg:mx-4 ">
        <img src={imageSrc} alt="Card" className="w-full h-[200px] object-cover mb-4 rounded-md" />
        <h2 className="text-amber-600 text-base font-bold  leading-tight">{title}</h2>
        <p className=" text-indigo-950 xl:text-[17px] lg:text-sm font-normal  leading-normal">{subtitle}</p>
      </div>
    );
  };

const CardContainer = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/300',
      title: '1A rating by CRISIL',
      subtitle: `This grading indicates that the Sightsavers India
      operates on strong delivery capabilities and high
      financial proficiency.`
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/300',
      title: 'Mahatma Award for Social Good 2019',
      subtitle: `Won the India Edition of the Mahatma Award for Social
      Good 2019, nominated for demonstrating excellence
      and the highest standards of ethical conduct, integrity,
      civic and social responsibility`
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/300',
      title: 'HCL Grant 2018 for Education',
      subtitle: `Sightsavers received the HCL award of INR 5 Crore for
      the extensive work on Inclusive Education.`,
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row justify-around  max-w-sm md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto container">
      {cardsData.slice(0, 3).map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
