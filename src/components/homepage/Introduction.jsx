import React from 'react'
import school from '../assets/school.jpg'

const Introduction = () => {
  return (
    <div className="py-10 lg:py-20   flex flex-col-reverse lg:flex-row lg:justify-between items-center max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container ">
       
          <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-4'>
  
  {/* left section */}
<div className='w-full lg:w-1/2'>
<h4 className='text-2xl font-bold mb-4 font-poppins '>Introduction </h4>
<p className='text-justify font-poppins mb-4'>Welcome to  Ajarananada Blind School—a haven where the power of knowledge and spirituality intertwine to illuminate the lives of our students. Nestled within the serene embrace of our ashram, we embrace diversity and empower individuals who navigate the world with their unique perspective. Here, the absence of sight is not a barrier but a gateway to endless possibilities. With a blend of holistic education and spiritual guidance, we nurture minds, cultivate talents, and foster a sense of belonging. Welcome to a place where vision knows no bounds. 

Join us at our Blind School cum Ashram, where darkness is transformed into light, and every journey begins with the courage to see beyond the visible. Welcome to a place where the heart sees what the eyes cannot. Welcome home.</p>
</div>


 {/* right section */}

 <div className='w-full lg:w-1/2 ' >
<img className='object-cover h-[350px]'   src={school} alt="" />
 </div>
            

          </div>


        </div>
  )
}

export default Introduction