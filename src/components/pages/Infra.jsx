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
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-[400px] h-[700px] cursor-pointer">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[300px] object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-poppins font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-justify text-sm font-poppins">{description}</p>
      </div>
    </div>
  );
};

const cardData = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/400",
    title: "Free Education",
    description:
      "Consist of 30 classrooms, one staffroom, one room for office and one room for Principal. In addition to this Computer library, Braille books & printing books library and Science, Home science and Maths laboratories also exists in separate rooms within school campus. Library and labs. Are being well maintained and have other facilities.",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/400",
    title: " Hostel ",
    description:
      "Hostel building consists of 20 spacious big rooms with proper ventilation. Four blind students can share one room with their belongings comfortably. Pure drinking water, clean bathroom and toilet facilities are also available. In addition to this Solar Water Heater is being installed for supplying hot water to all residing in school and ashram campus, specially in Winter Season.",
  },
  {
    id: 8,
    imageUrl: "https://via.placeholder.com/400",
    title: "Mess and Kitchen",
    description:
      "Neat & clean kitchen is available for cooking of meals in which eco friendly LPG is being used as fuel. Adjacent to this kitchen there exist a very spacious Dining Hall which can accommodate 200 students for taking meals comfortably at a time. Water Cooler is being installed at out side the kitchen for supply of pure and cool water. ",
  },

  {
    id: 5,
    imageUrl: "https://via.placeholder.com/400",
    title: "Braille Press and Library",
    description:
      "Education is no longer remained a privilege of eyed people. It was thrown open to blind people by Louis Bralle.Braille Press has been installed which are being used to translate the all curriculum books as well as other spiritual books into Braille Scripts for the use of Blind Students. They can read, understand and than explain the facts mentioned in printed books to other people. It boost their morale and self confidence. ",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/400",
    title: "Vocational Training",
    description:
      `We have vested with the complete facilities of providing education to the blinds using “Braille”. The education is based on the courses prescribed by the Government of Uttarakhand. Along with that our students are given skill based training in various handicrafts like making of Candles, Hindi-English typewriting, computer operation, different types of quality weaving and knitting, towels, bed-sheets, covers and dusters etc.

      The blind children are also given training in Music both Vocal and Instrumental. The training include classical and other forms of music. They work on modern musical instruments, Tablas, Harmonium, Sitar, Dholak etc. The musical training is provided in accordance with the syllabus prescribed by the Board of School Education, Uttarakhand, CBSE and NCERT.`,
  },






  {
    id: 7,
    imageUrl: "https://via.placeholder.com/400",
    title: "Braille & Printed Books Library",
    description:
      "The school has a big library consisting of more than 2000 books in Braille Script for self reading and study by the blinds and also more than 1000 books for the study of the eyed students. In addition different types of daily News Paper and other periodical books/Magazie for enhancement & updatation of general knowledge and enjoyment & recreation of the blinds as well as eyed students are also available in the School Library.",
  },


];

const Infra = () => {
  return (
    <section className="">


      {/* Our Infrastructure */}
      <div className="py-20 ">
   

   <h2 className="font-poppins text-4xl font-bold text-center mb-8">Facilities</h2>

        <div className="flex flex-wrap justify-center items-center gap-4 ">
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


    </section>
  );
};

export default Infra;
