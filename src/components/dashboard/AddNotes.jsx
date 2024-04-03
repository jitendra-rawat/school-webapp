import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const CardSection = ({ title, number }) => (
  <div className="m-4 w-[300px] h-[200px] bg-[#FCFCFC] shadow-lg py-4 px-8 rounded-xl flex flex-col lg:flex-row justify-center items-center cursor-pointer ">
    <div className="flex-col items-center justify-center">
      <p className="text-2xl font-bold text-center">{title}</p>
      <p className="text-xl font-bold text-center">{number}</p>
    </div>
  </div>
);

const AddNotes = () => {
  const sections = [
    { title: "Total Donations", number: "150 Lakh" },
    { title: "Total Visitors", number: "15 Lakh" },
    { title: "Total Students", number: "200" },
  ];

  return (
    <section className="flex flex-col lg:flex-row">
      {sections.map((section, index) => (
        <CardSection
          key={index}
          title={section.title}
          number={section.number}
        />
      ))}
    </section>
  );
};

export default AddNotes;
