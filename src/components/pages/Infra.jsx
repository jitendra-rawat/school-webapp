import React, { Component } from "react";
import about from "../assets/about.png";
import school from "../assets/school building.png";
import hostel from "../assets/hostel.png";
import temple from "../assets/temple.png";
import press from "../assets/braillepress.png";
import computer from "../assets/computer.png";
import books from "../assets/braillebooks.png";
import kitchen from "../assets/kitchen.png";
import cows from "../assets/cows.png";
import training from "../assets/vt.png";

import InfraComp from "../infrastructure/InfraComp";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-[400px] h-[600px] ">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[300px] object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-justify text-sm font-roboto">{description}</p>
      </div>
    </div>
  );
};

const cardData = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/400",
    title: "School Building",
    description:
      "Consist of 30 classrooms, one staffroom, one room for office and one room for Principal. In addition to this Computer library, Braille books & printing books library and Science, Home science and Maths laboratories also exists in separate rooms within school campus. Library and labs. Are being well maintained and have other facilities.",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/400",
    title: "Empowering Blinds through Vocational Training",
    description:
      "Since the Disabled Persons are educable, trainable and employable but with regular care and training. They can be successful professionals provided they get the right support and environment. Institute is putting their best efforts in every field by providing them(Blinds) all facilities required for achieving the above goal. ",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/400",
    title: "School Hostel For Blind Students",
    description:
      "Hostel building consists of 20 spacious big rooms with proper ventilation. Four blind students can share one room with their belongings comfortably. Pure drinking water, clean bathroom and toilet facilities are also available. In addition to this Solar Water Heater is being installed for supplying hot water to all residing in school and ashram campus, specially in Winter Season.",
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/400",
    title: "Magnificient Temple Building",
    description:
      "In this Temple grand statues of Sri Laxminarayan Bhagwan, Mata Annapurna Devi, Bhagwan Bhole Shankar, Pawan Putra Hanuman ji and many other idols of revered deities are being installed. Ritual duties in temple are being performed by Learned Pujaris which includes Arti Ceremony in early morning (Mangla Arti) and at night(ShayanArti) daily. ",
  },
  {
    id: 5,
    imageUrl: "https://via.placeholder.com/400",
    title: "Braille Press",
    description:
      "Education is no longer remained a privilege of eyed people. It was thrown open to blind people by Louis Bralle.Braille Press has been installed which are being used to translate the all curriculum books as well as other spiritual books into Braille Scripts for the use of Blind Students. They can read, understand and than explain the facts mentioned in printed books to other people. It boost their morale and self confidence. ",
  },
  {
    id: 6,
    imageUrl: "https://via.placeholder.com/400",
    title: "Computer Library Room",
    description:
      "All students of class 6th to 10th are being taught basic computer knowledge with practical. Keyboard with Braille script are also available for the use of Blind Students.",
  },
  {
    id: 7,
    imageUrl: "https://via.placeholder.com/400",
    title: "Braille & Printing Books Library",
    description:
      "The school has a big library consisting of more than 2000 books in Braille Script for self reading and study by the blinds and also more than 1000 books for the study of the eyed students. In addition different types of daily News Paper and other periodical books/Magazie for enhancement & updatation of general knowledge and enjoyment & recreation of the blinds as well as eyed students are also available in the School Library.",
  },
  {
    id: 8,
    imageUrl: "https://via.placeholder.com/400",
    title: "Kitchen & Dining Hall",
    description:
      "Neat & clean kitchen is available for cooking of meals in which eco friendly LPG is being used as fuel. Adjacent to this kitchen there exist a very spacious Dining Hall which can accommodate 200 students for taking meals comfortably at a time. Water Cooler is being installed at out side the kitchen for supply of pure and cool water. ",
  },
  {
    id: 9,
    imageUrl: "https://via.placeholder.com/400",
    title: "Big Enclosure For Cows",
    description:
      "Adjacent to kitchen building there exists large neat and clean enclosure for keeping and rearing cows. This have a separate and independent entrance gate. All cows belongs to good Haryana breed. Green fodder and pashu Aahar is being procured for feeding cows. Veterniary Doctor visits Gaushalla fortnightly to check up the health of cows. After this routine check up doctor treats any sick cows if found.",
  },
];

const Infra = () => {
  return (
    <section className="">
      <div className="py-20 xl:pt-48 infra-bg  bg-opacity-25">
        <div className="max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
          <p className="xl:py-24 xl:text-[50px] text-2xl font-extrabold text-white ">
            Our Infrastructure
          </p>
        </div>
      </div>

      {/* Our Infrastructure */}
      <div className="py-20 ">
        <p className="pb-8 xl:max-w-6xl font-roboto text-center xl:text-left text-neutral-700 text-base xl:text-lg font-normal leading-[30px]  mx-auto">
          We being a poor trust with very limited resources and without any
          outside aid vis-a-vis the gigantic cause which we dream to pursue,
          managed to make a beginning and our proud to mention some good
          facilities we have been able to provide in our school in accordance to
          our planned programmes. The Ajardham Mahila Ashram Trust having
          following infrastructure for providing maximum comfort to Blind
          Students residing and studying here.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {cardData.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              width="w-[400px]"
            />
          ))}
        </div>
      </div>

      {/* passion */}

      <InfraComp />
    </section>
  );
};

export default Infra;
