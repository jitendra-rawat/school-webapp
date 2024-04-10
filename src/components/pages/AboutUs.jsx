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

            <div className="w-1/2">
              <img src="https://placehold.co/600x400" alt="" />
            </div>


            <div className="w-1/2">
              <h2 className="font-poppins font-bold text-2xl">Our Founders</h2>
              <p className="font-poppins text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatum itaque. Distinctio nemo voluptas corrupti facilis nulla, harum itaque! Aliquam consectetur ipsum inventore minus. Iure ea corrupti, odio dolores voluptatem, dicta a reprehenderit eos quibusdam quis id facilis ad voluptas voluptatum quisquam illo ut error expedita doloremque ducimus nam eum laboriosam. Corrupti, praesentium quas pariatur optio accusantium vel officiis sunt ut? Quam cum voluptate dicta aliquid, reprehenderit atque commodi, deserunt asperiores, eligendi quisquam tempora molestias delectus? Asperiores id itaque expedita voluptatibus temporibus eius laboriosam ullam deserunt veritatis nisi cum blanditiis, magnam, est molestiae sapiente quaerat enim incidunt doloremque aliquid tenetur!</p>
            </div>

          </div>



          {/* second section */}

         
          <div className="lg:py-10 flex flex-col lg:flex-row justify-between items-start lg:space-x-10">

      
            <div className="w-1/2">
              <h2 className="font-poppins font-bold text-2xl">Our Mission</h2>
              <p className="font-poppins text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatum itaque. Distinctio nemo voluptas corrupti facilis nulla, harum itaque! Aliquam consectetur ipsum inventore minus. Iure ea corrupti, odio dolores voluptatem, dicta a reprehenderit eos quibusdam quis id facilis ad voluptas voluptatum quisquam illo ut error expedita doloremque ducimus nam eum laboriosam. Corrupti, praesentium quas pariatur optio accusantium vel officiis sunt ut? Quam cum voluptate dicta aliquid, reprehenderit atque commodi, deserunt asperiores, eligendi quisquam tempora molestias delectus? Asperiores id itaque expedita voluptatibus temporibus eius laboriosam ullam deserunt veritatis nisi cum blanditiis, magnam, est molestiae sapiente quaerat enim incidunt doloremque aliquid tenetur!</p>
            </div>


            <div className="w-1/2">
              <img src="https://placehold.co/600x400" alt="" />
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


         

      </div>




   
  );
}

export default AboutUs;
