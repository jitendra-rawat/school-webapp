
// src/SuccessStoriesSection.js

import React from "react";

const successStoriesData = [
  {
    title: "Ajay Chauhan, Cashier – State Bank of India",
    content:
      "Ajay Chauhan, born as the son of Mr. Baldev Singh of Baluakot, Gaja, Tehri garhwal on 15th February, 1988. He joined our school, Ajar Blind School, on 2nd July, 1996. He was always modest and studious. He was respectful towards his teachers. He has been in touch with the school ever since he graduated from our school. Now he is working as a Cashier in State Bank of India, Rajasthan. We wish him a successful career and life ahead.",
  },
  {
    title: "Mahaveer Prasad Vyas, Cashier – Punjab National Bank",
    content:
      "Mahaveer Prasad Vyas, son of Mr. Ramchandra Vyas of Uttarkashi, was born on 10th February, 1982. He won love of his teachers by his simplicity and hard work. He joined our school on 17th August, 1990. He has never been dependant on the support of others and has worked hard to stand on his own feet. Currently he is working in Punjab National Bank, Uttarkashi on the post of Cashier.",
  },
  {
    title: "Tajveer Singh Rawat, Assistant Group - E",
    content:
      "Tajveer Singh Rawat was born on 12th May, 1974 as the son of Mr. Shyam Singh Rawat of Lansdowne, Garhwal. He was a brave and hard working student. He joined us on 1st May, 1988 and graduated from our school in 1991. He has constantly been in touch ever since. He was always very patriotic and wanted to serve his nation in any way he could. Currently he is working in Indian Navy, Mumbai as an Assistant, Group – E.",
  },
  {
    title: "Naresh Pal, Employee – Secretariat, Dehradun",
    content:
      "Naresh Kumar Pal was born as the son of Mr. Bal Mukund Pal of Nainital on 10thJuly, 1986. He joined our school on 20th July, 1994. He was a studious and model student. He was modest and respectful towards his teachers. He has always kept us informed about his progress, ups and downs in his life and participated in school’s events. Currently he is working in the Secretariat in Dehradun, Uttarakhand.",
  },
  {
    title: "Gajendra Singh Chauhan, III class employee, Indian Railways",
    content:
      "Gajendra Singh Chauhan, son of Mr. Veerndra Kumar of Bijnor, Uttar Pradesh, was born on 10th September, 1982. He joined us on 2nd July, 1988. He has always shown independence and a spirit of hard work. He was always supportive towards his fellows in the school and respectful towards his teachers. His was good in studies and an excellent student. Currently he is working as a III Grade officer in Indian Railways, Delhi.",
  },
  {
    title: "Sanjay Singh Rawat, Music Teacher – Central School, Pauri Garhwal",
    content:
      "Sanjay Singh Rawat was born on 3rd April, 1984 as the son of Mr. Gabbar Singh of Pauri Garhwal. He was a hard working student. He joined our school on 17th August, 1992. He was always helpful and kind. He believed in spreading knowledge. He had a special love for music and he made it into a career. Currently he is working as a Music Teacher in Central School, Shri Nagar, Pauri Garhwal.",
  },
];

function SuccessStory() {
  return (
    <div className=" bg-gray-100 min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto container">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">
          Success Stories
        </h2>
        {successStoriesData.map((story, index) => (
          <div key={index} className="bg-white p-6 mb-8 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <p>{story.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStory;
