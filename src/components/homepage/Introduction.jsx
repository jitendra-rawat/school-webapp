import React from 'react'

const Introduction = () => {
  return (
    <div className=" lg:py-[30px]   flex flex-col-reverse lg:flex-row lg:justify-between items-center max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container ">
       
          <div className='flex justify-between items-center lg:space-x-10'>
  
  {/* left section */}
<div className='lg:w-1/2'>
<h4 className='text-2xl font-bold mb-4 font-poppins '>Introduction about the Ajar Blind School</h4>
<p className='text-justify font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eos cumque quam accusamus corrupti delectus consectetur, laborum molestiae! Dignissimos debitis deserunt voluptatum cumque corrupti eos alias exercitationem, autem excepturi in quos sequi! Autem maiores tenetur quibusdam voluptatibus vitae, beatae similique.</p>
</div>


 {/* right section */}

 <div className='lg:w-1/2 ' >
<img className='object-cover'   src="https://placehold.co/600x400" alt="" />
 </div>
            

          </div>


        </div>
  )
}

export default Introduction