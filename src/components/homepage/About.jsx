import React from 'react'
import { Link } from 'react-router-dom'
import about from '../assets/school building.png'
import work from '../assets/hostel.png'
import donate from '../assets/donate.png'

const About = () => {
  return (
    <section className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto container">


    {/* about us */}
  
    <div className="  px-8 lg:py-20 mt-20 flex flex-col lg:flex-row items-center  lg:space-x-10   ">


          {/* right Side */}
          <div className="lg:w-1/2 ">
        <h1 className="text-black text-2xl lg:text-4xl font-semibold ">About Us
</h1>
        <p className=" py-4 text-black text-sm lg:text-base font-normal  leading-normal ">This school for the blinds was constituted and established on 30 th may, 1968 as a primary school by the gracius hands of Brahmaleen Shri Shri 1008 Swami Ajranand Ji Maharaj.</p>
      <Link to={'/about'}> <button className="bg-orange-500 text-gray-200 px-10 py-3 rounded-full text-base font-semibold">Read More</button></Link> 
      </div>


      {/* Left Side */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={about}
          alt="Header Image"
          className=" object-cover   w-[530px] h-[265px] rounded-3xl"
        />
      </div>

    </div>


    {/* work */}

    <div className="  px-8 lg:py-20  flex flex-col-reverse lg:flex-row items-center  lg:space-x-10   ">



      {/*Right Side */}
<div className="lg:w-1/2 mt-8 lg:mt-0">
<img
src={work}
alt="Header Image"
className=" object-cover  w-[530px] h-[265px] rounded-3xl"
/>
</div>


{/* Left Side */}
<div className="lg:w-1/2 ">
<h1 className="text-black text-2xl lg:text-4xl font-semibold pt-8">Our Work
</h1>
<p className="py-4 text-black text-sm lg:text-base font-normal  leading-normal  ">Our school gives free education to both Blind boys and sighted children. At present an integrated education is imparted up to class 10th. In this system there are about 450 children studying at present.</p>
<Link to={'/about'}> <button className="bg-orange-500 text-base text-gray-200 px-10 py-3 rounded-full font-semibold">Read More</button></Link> 
</div>













</div>


   {/* donate */}


   <div className="  px-8 lg:py-20   flex flex-col lg:flex-row items-center justify-between  lg:space-x-10   ">






{/* Left Side */}
<div className="lg:w-1/2 ">
<h1 className="text-black text-2xl lg:text-4xl font-semibold pt-8">Donate
</h1>
<p className="py-4 text-black text-sm lg:text-base font-normal  leading-normal ">We have been regularly working with full dedication towards the service of such a great humanitarian cause. Donations can be sent by the Online Payment through this webiste, Click here for details.</p>
<Link to={'/donation'}> <button className="text-base bg-orange-500 text-gray-200 px-10 py-3 rounded-full font-semibold">Read More</button></Link> 
</div>





{/*Right Side */}
<div className="lg:w-1/2 mt-8 lg:mt-0">
<img
src={donate}
alt="Header Image"
className=" object-cover w-[530px] h-[265px] rounded-xl "
/>
</div>







</div>


    </section>
  )
}

export default About