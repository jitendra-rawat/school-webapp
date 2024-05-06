import React from 'react'



const Donation = () => {
  return (
    <section>

      


   {/* services */}

   <div className='py-20 max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container'>


    <h2 className='text-4xl font-poppins font-bold text-center mb-8'>Support Us</h2>


   <div className="flex flex-wrap justify-between md:flex-row p-4   ">

      {/* Left Section */}
      <div className=" p-4 w-full xl:w-1/2">

        <h1 className=" mb-2  text-gray-800 text-lg xl:text-2xl font-bold  xl:leading-[57.60px] font-poppins">Some services we provide for our children</h1>
       
        <p className="font-poppins mb-4  text-black text-lg font-normal text-justify">
        With your support, we can continue to illuminate the path for these bright young minds.Your generosity has the power to transform lives and create brighter futures for visually impaired children. Together, let's illuminate their path to success and ensure they have every opportunity to thrive. Thank you for your support!
        </p>

    
      
      </div>

      {/* Right Section with Placeholder Image */}
      <div className=" p-4 w-full xl:w-1/2">
        <img
          src="https://via.placeholder.com/500"
          alt="Placeholder"
          className="w-[500px] h-[436px] rounded-[10px]"
        />
      </div>
    </div>

   </div>


    {/* donate */}









    </section>
  )
}

export default Donation