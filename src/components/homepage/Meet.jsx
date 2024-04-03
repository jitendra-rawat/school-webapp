

import React from "react";
import { Link } from "react-router-dom";

const Meet = () => {
  return (
    <section className="py-20 custom-bg ">
      <div className="max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
        <div class="text-center text-black text-[44px] font-bold  capitalize">
        Chairman 
        </div>

        {/* founder */}

        <div className="flex flex-col lg:flex-row justify-center items-start gap-4 xl:gap-x-10  py-8">
          {/* Left side */}

          <div>
            <img
              src="https://cdn.pixabay.com/photo/2022/03/31/17/31/meditation-7103446_1280.png"
              className="w-[500px] h-[550px] object-cover"
              alt=""
            />
          </div>

          {/* Right side -*/}
          <div className="max-w-md">
            <h2 className="py-2 lg:py-0 w-[519px] text-black text-xl font-bold  capitalize leading-[34px] font-roboto">
            Shri Swami Sachchidanand Ji Maharaj Paramahamsa (Vyakaran Vedantacharya)
            </h2>
            <p className="w-[600px] text-justify text-zinc-600 text-sm font-normal  leading-[29px] py-4 font-roboto">
            Mahamandaleshwar Shri Swami Sachchidanand Ji Maharaj Paramhamsa was born in Kulasi village, Jhajjar, Haryana. Belonged to a Brahmin family. Raised by his grandmother in Garhiwala, Sonipat, after his mother's demise. His serene and Satsang-loving nature emerged in childhood. Attending satsangs with his grandmother in the village, he listened to Bhagwat Katha's daily given by Swami Chetananand ji in Garhiwala Kutiya in 1953. During adolescence, residing with saints, he effortlessly delved into texts like Vriti Prabhakar Tattvanusandhan and Vairagya Shatak. Driven by the desire to study Sanskrit, he moved to Rishikesh.

Endearing himself to saints, teachers, and peers, he displayed exceptional memory, mastering complex lessons with a single hearing. Brahmalin Swami Ajaranand Ji, captivated by his personality, urged him to reside in Ajaradham Mahila Ashram. He also accepted himself at the feet of that supreme being.


After establishing his glory in you, Swamiji became Brahmalin in the year 1970. His studies persisted with support from Mother Shantanand and Swaroopanand. His divine talent earned gold medals in the Vyakaran Shastri and Acharya exams despite adversity. Even after his sannyasa in the Kumbh Mela of 1974, his studies continued. He excelled in Vedantarchaya, achieving the highest university scores. Despite challenges, he set an example, culminating in his appointment as Mahamandaleshwar in 1975.

            </p>

        <Link to={'/our-history'}>
          <div class=" py-4 w-[216px] h-[61px] px-4  bg-orange rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex">
  <div class="text-white text-xs font-medium ">Visit Our History Now</div>
</div>

</Link> 
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default Meet;
