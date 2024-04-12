import React from 'react'

const Introduction = () => {
  return (
    <div className="py-10 lg:py-20   flex flex-col-reverse lg:flex-row lg:justify-between items-center max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container ">
       
          <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-4'>
  
  {/* left section */}
<div className='w-full lg:w-1/2'>
<h4 className='text-2xl font-bold mb-4 font-poppins '>Introduction about the Ajar Blind School</h4>
<p className='text-justify font-poppins mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eos cumque quam accusamus corrupti delectus consectetur, laborum molestiae! Dignissimos debitis deserunt voluptatum cumque corrupti eos alias exercitationem, autem excepturi in quos sequi! Autem maiores tenetur quibusdam voluptatibus vitae, beatae similique.</p>
</div>


 {/* right section */}

 <div className='w-full lg:w-1/2 ' >
<img className='object-cover'   src="https://placehold.co/600x400" alt="" />
 </div>
            

          </div>


        </div>
  )
}

export default Introduction