import React from 'react'
import Support from '../homepage/Support'



const Donation = () => {
  return (
    <section>

      


   {/* services */}

   <div className='py-20 max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container'>


    <h2 className='text-4xl font-poppins font-bold text-center mb-8'>Support Us</h2>


   <div className="flex flex-wrap justify-between items-center md:flex-row p-4   ">

      {/* Left Section */}
      <div className=" p-4 w-full xl:w-1/2">

       
       
        <p className="font-poppins mb-4  text-black text-lg font-normal text-justify">
        With your support, we can continue to illuminate the path for these bright young minds.Your generosity has the power to transform lives and create brighter futures for visually impaired children. Together, let's illuminate their path to success and ensure they have every opportunity to thrive. Thank you for your support!
        </p>

    
      
      </div>

      {/* Right Section with Placeholder Image */}
      <div className=" p-4 w-full xl:w-1/2">
        <img
          src="https://img.freepik.com/free-vector/disabled-student-illustration_114360-18424.jpg?t=st=1715079689~exp=1715083289~hmac=c83f5869ef62b3126c361a0540af77d428f974b43a27564fc2af17420c4b77d6&w=826"
          alt="Placeholder"
          className="w-[500px] h-[436px] rounded-[10px] object-cover"
        />
      </div>
    </div>

   </div>


      {/* support us card */}

      <Support />









    </section>
  )
}

export default Donation