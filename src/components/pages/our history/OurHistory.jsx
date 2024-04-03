import React from "react";

const OurHistory = () => {
  return (
    <section>
      {/* header banner */}

      <div className="py-20 xl:pt-48 history-bg bg-opacity-25">
        <div className="max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
          <p className="xl:py-24 xl:text-[50px] text-2xl font-extrabold text-white ">
            Our History
          </p>
        </div>
      </div>

      {/* founder and cofounder*/}
      <div className="  max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
        <div className="flex flex-wrap justify-between md:flex-row py-16  ">
          {/* left Section */}
          <div className="py-4">
            <img
              src="https://via.placeholder.com/500"
              alt="Placeholder"
              className="w-[500px] h-[570px] rounded-[10px]"
            />
          </div>

          {/* right Section */}
          <div className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange rounded-full "></div>
              <div className="text-neutral-700 text-lg font-medium ">
                Founder
              </div>
            </div>

            <h1 className="mb-2 xl:w-[608px] font-sans text-gray-800 text-lg xl:text-4xl font-bold xl:leading-[57.60px]">
              Shri Swami Ajaranand Ji Maharaj
            </h1>

            <p className="mb-4 xl:w-[608px] font-roboto text-black text-base xl:text-lg font-normal text-justify">
              Shri Swami Ajaranand Ji Maharaj was born in 1911, in Garanpura
              village, Bhiwani, Haryana. His childhood name was Vishnu Prasad.
              At the age of just five years, child Vishnu lost his eyesight.
              From a young age, he harbored love for sages, a charitable spirit,
              and a deep interest in Satsang. Viewing the world as meaningless,
              he devoted himself to God's worship, eventually leaving home to
              lead a saintly life, immersing himself in religious texts. <br />
              Formally renounced in 1936 under Swami Akhandanand Ji Maharaj, he
              embarked on foot pilgrimages across India. Engaging in social
              service, charity, and religious propagation, he founded Shri Ajar
              Dham Mahila Ashram in 1963, dedicated to aiding destitute elderly
              mothers. Swami Ji established Shri Swami Ajaranand Andh Vidyalaya
              in 1968 for the visually impaired.
              <br /> Beyond Haridwar, he extended his social service to build
              schools, water tanks, hospitals, etc. His life, dedicated to
              self-discovery, social reform, and religious propagation,
              fulfilled the saying "Bhavasagartaran-taranaayejagamahi." After
              his divine life, he became Brahmlin on June 11, 1970. He will
              always inspire us on the path of righteousness and strength.
            </p>
          </div>
        </div>

        {/* cofounder */}

        <div className="flex flex-wrap-reverse justify-between md:flex-row py-16  ">
          {/* left Section */}
          <div className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange rounded-full "></div>
              <div className="text-neutral-700 text-lg font-medium ">
                Co-founder and Former President of the Organization
              </div>
            </div>

            <h1 className="mb-2 w-[608px] text-gray-800 text-lg xl:text-4xl font-bold leading-[57.60px]">
              Sant Mata Devi Shanta Nand Ji Paramahansa
            </h1>
            <p className="mb-4 xl:w-[608px] font-roboto text-black text-base xl:text-lg font-normal text-justify">
              Sant Mata Devi Shanta Nand Ji Paramahansa, the co-founder and
              former president of the organization. Born in 1923 in Rangpur,
              Bengal. Mata Devi Shanta Nand Ji embraced a life of service,
              embodying values of sacrifice, discipline, and dedication from an
              early age.<br /> After a transformative encounter with Swami Ajaranand
              Ji Maharaj, Mata Devi Shanta Nand Ji devoted herself to spiritual
              pursuits and took sannyasa in 1956. Under the inspiration of Swami
              Ajaranand Ji, she played a pivotal role in establishing
              institutions focused on the service of elderly mothers and the
              education of visually impaired children. <br />In 1963, she contributed
              significantly to the establishment of Shri Ajardham Mahila Ashram
              in Haridwar, emphasizing both spiritual and material well-being.
              In 1968, she took on the responsibility of an Andh Vidyalaya
              (school for the blind), demonstrating her commitment to education
              and empowerment. Despite facing challenges, she continued her
              dedicated service until she became Brahmalin in 1998.<br /> Mata Devi
              Shanta Nand Ji's life is a testament to the principles of selfless
              service, spiritual inquiry, and compassion, leaving a lasting
              impact on the institution she helped establish for the betterment
              of society.
            </p>
          </div>

          {/* right Section */}
          <div className="py-4">
            <img
              src="https://via.placeholder.com/500"
              alt="Placeholder"
              className="w-[500px] h-[620px] rounded-[10px]"
            />
          </div>
        </div>
      </div>



      {/* our guruji */}
      <div className="bg-orange">
        <div className="xl:py-36 py-16 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
          <div className="flex flex-col xl:flex-row gap-y-8 justify-between ">
            {/* left section */}
            <div>
              <div className="w-[272.39px] text-white text-lg xl:text-[40px] font-extrabold xl:leading-[69px]">
                Our Guruji
              </div>
              <div className="xl:w-[373px] py-2 pb-4 text-white text-base xl:text-[15px] font-normal xl:leading-[29.75px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                harum aperiam obcaecati quo dolor cumque libero, similique error
                perferendis molestiae.
              </div>
              <button className="bg-white text-orange px-8 py-2 rounded-md">
                Know More
              </button>
            </div>

            {/* right section */}
            <div>
              <div className="flex flex-wrap items-center gap-4 justify-between ">
                {/* first row */}
                <img
                  className="w-[196.64px] h-[196.64px] relative blur-[0px] rounded-full "
                  src="https://via.placeholder.com/197x197"
                />
                <img
                  className="w-[196.64px] h-[196.64px] relative blur-[0px] rounded-full "
                  src="https://via.placeholder.com/197x197"
                />
                <img
                  className="w-[196.64px] h-[196.64px] relative blur-[0px] rounded-full "
                  src="https://via.placeholder.com/197x197"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>






 
    </section>
  );
};

export default OurHistory;
