import React from "react";
import about from "../assets/about.png";
import Stories from "../pages/stories/Stories";

import history1 from "../assets/history-1.png";
import history2 from "../assets/history-2.png";
import Accord from "../about/Accord";
import Overview from "../about/Overview";

function AboutUs() {
  return (
   
<div className="py-20 max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl  mx-auto container">


  <h2 className="font-poppins font-bold text-center text-4xl mb-8">About Us</h2>

   
   {/* first section */}
          
          <div className="lg:py-10 flex flex-col lg:flex-row justify-between items-start lg:space-x-10">

            <div className="lg:w-1/2">
              <img src="https://placehold.co/600x350" alt="" />

            
            </div>


            <div className="lg:w-1/2">
              <h2 className="font-poppins font-bold text-2xl">Our Founders</h2>
              <p className="font-poppins text-justify">Inspired by the preaching’s of his renowned and revered spiritual GURU SRI SRI AKHANDANAND JI MAHARAJ who preached that service to the poor, helpless and disabled is real prayer to GOD. To fulfil his Guru’s preaching Swami Ajaranand ji Maharaj who himself was blind, established “SWAMI AJARANAND ANDH VIDYALAYA HIGH SCHOOL” on 30th May 1968 at Sapt Sarover , near the bank of holy river GANGA in religious city HARIDWAR, The Gateway To God. It is being governed by “Ajardham Mahila Ashram Trust” Sapt Sarover, Post-Sadhubela, Haridwar, which was constituted and established by Swamiji Maharaj himself on 1st January 1963 with the sole aim to rehabilitate the old, oppressed and helpless poor women who were neglected by the society, without giving any consideration to caste or creed.</p>
            </div>

          </div>



          {/* second section */}

         
          <div className="lg:py-10 flex flex-col lg:flex-row justify-between items-start lg:space-x-4">

      
            <div className="w-1/2">
              <h2 className="font-poppins font-bold text-2xl">Our Mission</h2>
              <p className="font-poppins text-justify">Our mission is to provide a nurturing and inclusive environment where individuals with visual impairments can thrive academically, emotionally, and spiritually. <br />

Our core objectives include:<br />

1. Empowering Education: We are dedicated to providing high-quality education tailored to the unique needs of blind and visually impaired students. Through innovative teaching methods, specialized curriculum, and assistive technologies, we ensure that every student has the opportunity to reach their full academic potential. <br />

2. Holistic Development: We believe in nurturing the whole individual—mind, body, and spirit. In addition to academic excellence, we provide opportunities for physical fitness, creative expression, and spiritual growth, fostering well-rounded individuals prepared to contribute positively to society. <br />

3. Independence and Empowerment: Our goal is to equip students with the skills, confidence, and independence they need to navigate the world with dignity and self-reliance. We focus on teaching essential life skills, mobility training, and vocational skills that empower students to lead fulfilling and independent lives. <br />

4. Fostering Inclusion and Community: We are committed to creating an inclusive and supportive community where every student feels valued, respected, and understood. Through collaborative learning experiences, peer support networks, and community outreach initiatives, we foster a sense of belonging and encourage students to embrace their unique identities.<br />

5. Advocacy and Awareness: We advocate for the rights and inclusion of individuals with visual impairments, both within our school community and in society at large. We strive to raise awareness about the capabilities and contributions of blind and visually impaired individuals, promoting a more inclusive and equitable world for all.<br />

By upholding these principles and working in partnership with students, families, and the community, we aim to empower individuals with visual impairments to realize their full potential and lead meaningful and fulfilling lives</p>
            </div>


            <div className="lg:w-1/2 flex flex-col space-y-4">
              <img src="https://placehold.co/400x300" alt="" />

              <img src="https://placehold.co/400x300" alt="" />
         
            </div>

          </div>



          {/* third section */}

          <div className="lg:py-10 flex flex-col lg:flex-row justify-between items-start lg:space-x-10">

<div className="w-1/2">
  <img src="https://placehold.co/600x400" alt="" />
</div>


<div className="w-1/2">
  <h2 className="font-poppins font-bold text-2xl">Ashrams and School</h2>
  <p className="font-poppins text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatum itaque. Distinctio nemo voluptas corrupti facilis nulla, harum itaque! Aliquam consectetur ipsum inventore minus. Iure ea corrupti, odio dolores voluptatem, dicta a reprehenderit eos quibusdam quis id facilis ad voluptas voluptatum quisquam illo ut error expedita doloremque ducimus nam eum laboriosam. Corrupti, praesentium quas pariatur optio accusantium vel officiis sunt ut? Quam cum voluptate dicta aliquid, reprehenderit atque commodi, deserunt asperiores, eligendi quisquam tempora molestias delectus? Asperiores id itaque expedita voluptatibus temporibus eius laboriosam ullam deserunt veritatis nisi cum blanditiis, magnam, est molestiae sapiente quaerat enim incidunt doloremque aliquid tenetur!</p>
</div>

</div>




   {/* fourth section */}


   <div className="lg:py-10 flex flex-col lg:flex-row justify-between items-start lg:space-x-4">

      
<div className="w-1/2">
  <h2 className="font-poppins font-bold text-2xl">Our History</h2>
  <p className="font-poppins text-justify mb-4">This school for the blind was established on 30th may, 1968 as a primary school by the gracious hands of Brahmaleen Shri Shri 1008 Swami Ajaranand Ji Maharaj at the pious city of Haridwar. Our dream, with our continued efforts, ultimately succeeded and the school started the “Junior High School Classes” on 1st July, 1978 ad got permanent recognition as a Junior High School from Department of Education, Govt. of Uttar Pradesh in 1982.</p>
<p className="font-poppins text-justify">It is a matter of great pleasure for us all that by the grace of almighty our school was given recognition for up gradation by the Madhyamik Shiksha Parishad, UP on 1st December, 2000 for the level of High School. We can now impart education to all children up to std.10. At present we conduct integrated education up to class 10. There is strength of 450 in our school currently including 77 blind students. The classes are held regularly from 7:30 AM to 1:00 PM in summers and 8:30 AM to 2:00 PM in winters.</p>

</div>


<div className="lg:w-1/2 flex flex-col space-y-4">
  <img src="https://placehold.co/400x300" alt="" />

 

</div>

</div>


         

      </div>




   
  );
}

export default AboutUs;
