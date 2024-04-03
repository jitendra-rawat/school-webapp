import React from "react";
import about from "../assets/about.png";
import Stories from "../pages/stories/Stories";

import history1 from "../assets/history-1.png";
import history2 from "../assets/history-2.png";
import Accord from "../about/Accord";
import Overview from "../about/Overview";

function AboutUs() {
  return (
    <section>
      <div className="py-16 lg:py-40 about-bg bg-opacity-25">
        <div className="max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container">
          <p className="text-2xl lg:text-[50px] font-extrabold text-white ">
            About Us
          </p>
        </div>
      </div>

      {/* mahila trust */}

      <div className="py-20 max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl  mx-auto container">
        <div className="flex flex-col  justify-between xl:flex-row py-4  ">
          {/* left Section with Placeholder Image */}
          <div className=" py-4">
            <img
              src="https://via.placeholder.com/500"
              alt="Placeholder"
              className="w-[500px] h-[436px] rounded-[10px]"
            />

            <div class="pt-8 xl:w-[520px] text-neutral-700 text-lg lg:text-[28px] font-semibold  leading-[33.88px]">
              We’re Ready To kids Ready For their Better Future With Us
            </div>

            <div class="mt-4 h-[87px] text-zinc-500 text-base lg:text-lg font-normal leading-relaxed">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall value
              proposition.{" "}
            </div>
          </div>

          {/* right Section */}
          <div className=" p-4">
          <div className="flex items-center gap-2">
              <div class="w-3 h-3 bg-orange rounded-full "></div>
              <div class="text-neutral-700 text-lg font-medium ">
                About our Mahila Trust Ashram
              </div>
            </div>

            <h1 className=" mb-2 xl:w-[608px] text-gray-800 text-2xl  font-bold  leading-[57.60px]">
              Shri Swami Ajaranand Andh Vidyalaya High School
            </h1>

            <p className=" mb-4 xl:w-[608px] text-justify text-black text-sm lg:text-lg font-normal">
              It was established by Shri Swami
              Ajaranand Ji Maharaj in 1963 to provide support to neglected,
              abused, and helpless elderly womens in the society. Here,
              destitute old mothers do self-welfare in the field of spirituality
              and live a respectable life without any caste discrimination.{" "}
              <br />
              There is a grand temple in the ashram in which Aarti is performed
              in the morning and evening. Every person residing in the
              institution is present in the Aarti. There is a big satsang hall
              in the institution. In which bhajan-kirtan and Satsang take place
              every day. <br /> In the Satsang Hall, there is the Samadhi temple
              of Brahmalin Shri Swami Ajaranand Ji Maharaj and Karmayogi
              Brahmalin Mata Shantanand Ji Maharaj. There is also a cow shelter
              in the ashram for blind children and saints. The milk of this
              cowshed is used for blind children and saints. There are about 25
              cows in this cow shed.
            </p>

            {/* vision */}
            {/* <div className="py-6 flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.5 0C6.05618 0 0 6.05618 0 13.5C0 20.9438 6.05618 27 13.5 27C20.9438 27 27 20.9438 27 13.5C27 6.05618 20.9438 0 13.5 0ZM11.0337 20.2747L5.8024 14.4612L7.34647 13.0716L10.9811 17.11L19.601 6.84476L21.1937 8.17789L11.0337 20.2747Z"
                  fill="#1B781A"
                />
              </svg>

              <div>
                <p className="text-neutral-700 text-lg lg:text-xl font-semibold ">
                  Our Vision
                </p>
                <p className="w-[435px] text-zinc-500 text-base lg:text-lg font-normal  leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus, consequuntur.
                </p>
              </div>
            </div> */}

            {/* mission */}

            <div className="py-6 flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.5 0C6.05618 0 0 6.05618 0 13.5C0 20.9438 6.05618 27 13.5 27C20.9438 27 27 20.9438 27 13.5C27 6.05618 20.9438 0 13.5 0ZM11.0337 20.2747L5.8024 14.4612L7.34647 13.0716L10.9811 17.11L19.601 6.84476L21.1937 8.17789L11.0337 20.2747Z"
                  fill="#1B781A"
                />
              </svg>

              <div>
                <p className=" text-neutral-700 text-lg lg:text-xl font-semibold ">
                  Our Mission
                </p>
                <p className=" text-justify text-zinc-500 text-base lg:text-lg font-normal  leading-relaxed">
                To empower visually impaired students through tailored education, fostering independence, excellence, and inclusivity in a supportive environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blind school */}

      <div className=" max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl  mx-auto container">
        <div className="flex flex-col  justify-between xl:flex-row py-4  ">
          {/* left Section with Placeholder Image */}
          <div className=" p-4">
            <div className="flex items-center gap-2">
              <div class="w-3 h-3 bg-orange rounded-full "></div>
              <div class="text-neutral-700 text-lg font-medium ">
                About our School
              </div>
            </div>

            <h1 className=" mb-2 xl:w-[608px] text-gray-800 text-2xl  font-bold  leading-[57.60px]">
              Shri Swami Ajaranand Andh Vidyalaya High School
            </h1>

            <p className=" mb-4 xl:w-[608px] text-justify text-black text-sm lg:text-lg font-normal">
             Itwas established on May 30,
              1968, as a primary school under the guidance of Shri Swami
              Ajaranand Ji Maharaj. This school is run by the Shri Ajar Dham
              Mahila Ashram Trust Committee. In July 1977, junior classes were
              started in the school with the permission of the Education
              Department. In 1982, the Uttar Pradesh Government granted
              permanent recognition at the Junior High School level. <br /> The school,
              open to blind children aged 6 to 14 of all religions and castes,
              offers free education, accommodation, food, clothing, medical
              care, and other daily necessities. The school has its permanent
              three-story building, the school accommodates around 600 children,
              with well-ventilated, clean, and beautiful rooms, along with
              proper toilet facilities. To address the challenges faced by the
              visually impaired, modern scientific means are regularly provided
              by Shri Swami Sachidanand Ji Maharaj Paramhans to enhance their
              education and foster self-reliance.
            </p>

            {/* vision */}
            {/* <div className="py-6 flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.5 0C6.05618 0 0 6.05618 0 13.5C0 20.9438 6.05618 27 13.5 27C20.9438 27 27 20.9438 27 13.5C27 6.05618 20.9438 0 13.5 0ZM11.0337 20.2747L5.8024 14.4612L7.34647 13.0716L10.9811 17.11L19.601 6.84476L21.1937 8.17789L11.0337 20.2747Z"
                  fill="#1B781A"
                />
              </svg>

              <div>
                <p className="text-neutral-700 text-lg lg:text-xl font-semibold ">
                  Our Vision
                </p>
                <p className="w-[435px] text-zinc-500 text-base lg:text-lg font-normal  leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus, consequuntur.
                </p>
              </div>
            </div> */}

            {/* mission */}

            {/* <div className="py-6 flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.5 0C6.05618 0 0 6.05618 0 13.5C0 20.9438 6.05618 27 13.5 27C20.9438 27 27 20.9438 27 13.5C27 6.05618 20.9438 0 13.5 0ZM11.0337 20.2747L5.8024 14.4612L7.34647 13.0716L10.9811 17.11L19.601 6.84476L21.1937 8.17789L11.0337 20.2747Z"
                  fill="#1B781A"
                />
              </svg>

              <div>
                <p className=" text-neutral-700 text-lg lg:text-xl font-semibold ">
                  Our Mission
                </p>
                <p className="w-[435px] text-zinc-500 text-base lg:text-lg font-normal  leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus, consequuntur.
                </p>
              </div>
            </div> */}
          </div>

          {/* right Section */}

          <div className=" py-4">
            <img
              src="https://via.placeholder.com/500"
              alt="Placeholder"
              className="w-[500px] h-[436px] rounded-[10px]"
            />

            <div class="pt-8 xl:w-[520px] text-neutral-700 text-lg lg:text-[28px] font-semibold  leading-[33.88px]">
              We’re Ready To kids Ready For their Better Future With Us
            </div>

            {/* <div class="xl:w-[500px] h-[87px] text-zinc-500 text-base lg:text-lg font-normal leading-relaxed">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall value
              proposition.{" "}
            </div> */}

            
          </div>
        </div>
      </div>

      {/* activities */}

      <div className="py-20 lg:py-0 max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl  mx-auto container">
        <div class="lg:py-12 xl:w-[700px] text-zinc-800 text-lg lg:text-[40px] font-bold  capitalize leading-[53.28px]">
          Activites we do on our school on our school
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-10 justify-between ">
          {/* left section */}

          <div>
            <Accord />
          </div>

          {/* right section */}

          <div className="flex-col space-y-10">
            <img
              class="xl:w-[574.86px] h-[446px] rounded-[30px]"
              src="https://via.placeholder.com/575x446"
            />

            <img
              class="xl:w-[574.86px] h-[446px] rounded-[30px]"
              src="https://via.placeholder.com/575x446"
            />
          </div>
        </div>
      </div>

      {/* overview */}

      <Overview />
    </section>
  );
}

export default AboutUs;
