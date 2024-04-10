import React from 'react'

import Donate from '../homepage/Donate'

import ActivitiesCarousel from '../activities/ActivitesCarousel'

const Donation = () => {
  return (
    <section>

      


   {/* services */}

   <div className='py-20 max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container'>


    <h2 className='text-4xl font-poppins font-bold text-center mb-8'>Support Us</h2>


   <div className="flex flex-col justify-between md:flex-row p-4  ">
      {/* Left Section */}
      <div className=" xl:p-4">
        <h1 className=" mb-2 xl:w-[608px] text-gray-800 text-lg xl:text-5xl font-bold  xl:leading-[57.60px] font-poppins">Some services we provide for our children</h1>
       
        <p className="font-poppins mb-4 xl:w-[608px] text-black text-lg font-normal text-justify">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ducimus esse consequuntur numquam assumenda, quia recusandae maiores sed! Quas iusto natus libero corrupti ipsa sint veritatis culpa, nostrum doloremque illum aliquid veniam distinctio dignissimos optio, ut vero voluptatem inventore delectus animi dolorem ab nobis! Magnam impedit adipisci iure sapiente molestiae.
        </p>
        <ul className="list-disc pl-4">
          <li className='text-black text-sm font-poppins font-normal leading-[21px] py-2'>Sedut perspiciatis unde omnis iste natus voluptatem accusan tium dolore</li>
          <li className='text-black text-sm font-poppins font-normal leading-[21px] py-2'>Sedut perspiciatis unde omnis iste natus voluptatem accusan tium dolore</li>
          <li className='text-black text-sm font-poppins font-normal  leading-[21px] py-2'>Sedut perspiciatis unde omnis iste natus voluptatem accusan tium dolore</li>
        </ul>
    
      
      </div>

      {/* Right Section with Placeholder Image */}
      <div className=" p-4">
        <img
          src="https://via.placeholder.com/500"
          alt="Placeholder"
          className="w-[500px] h-[436px] rounded-[10px]"
        />
      </div>
    </div>

   </div>


    {/* donate */}


<Donate />


   {/* bannner */}


<div className='py-20 bg-[#FEF6F2]'>

  <div className='max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container'>

 

  {/* first row */}

  <div className='py-4 flex flex-wrap justify-between items-center'>

    <div className='flex gap-2  space-y-2  '>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path opacity="0.26" d="M22.2185 29.3199H9.77918C7.85049 29.4398 5.95642 28.7712 4.53122 27.4685C3.22855 26.042 2.5599 24.1479 2.67977 22.2206V9.78009C2.5599 7.85275 3.22722 5.9587 4.52988 4.53217C5.95642 3.22952 7.85049 2.56088 9.77918 2.68075H22.2185C24.1445 2.56088 26.0372 3.22819 27.4624 4.53084C28.7638 5.9587 29.4338 7.85141 29.3192 9.78009V22.2206C29.4378 24.1479 28.7704 26.042 27.4678 27.4685C26.0412 28.7712 24.1472 29.4398 22.2185 29.3199Z" fill="#D85D37"/>
  <path d="M22.7387 13.8637L14.0017 22.6442C13.5473 23.0865 12.9501 23.3337 12.327 23.3337H9.27618C9.10741 23.3337 8.95162 23.2686 8.83478 23.1515C8.71794 23.0345 8.66602 22.8784 8.66602 22.7093L8.74391 19.6263C8.75689 19.015 9.00355 18.4426 9.43197 18.0133L15.6245 11.8085C15.7283 11.7044 15.9101 11.7044 16.014 11.8085L18.1859 13.9717C18.3287 14.1135 18.5364 14.2059 18.7571 14.2059C19.2374 14.2059 19.6139 13.8156 19.6139 13.3473C19.6139 13.1132 19.523 12.905 19.3802 12.7489C19.3413 12.6969 17.2732 10.6377 17.2732 10.6377C17.1434 10.5076 17.1434 10.2865 17.2732 10.1564L18.143 9.27187C18.9479 8.46537 20.2462 8.46537 21.0511 9.27187L22.7387 10.9629C23.5307 11.7564 23.5307 13.0572 22.7387 13.8637Z" fill="#D85D37"/>
</svg>

<div>
<p className='text-gray-800 text-lg xl:text-2xl font-bold xl:leading-[38.40px]'>20+ Blinds visit in 2 months</p>
<p className='xl:w-[436px] text-zinc-600 text-base font-normal  leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
</div>
    </div>


    <div className='flex gap-2  space-y-2  '>

    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path opacity="0.26" d="M21.4334 2.66699H25.948C27.8177 2.66699 29.3327 4.19479 29.3327 6.08028V10.633C29.3327 12.5185 27.8177 14.0463 25.948 14.0463H21.4334C19.5637 14.0463 18.0487 12.5185 18.0487 10.633V6.08028C18.0487 4.19479 19.5637 2.66699 21.4334 2.66699Z" fill="#D85D37"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.05071 2.66699H10.5653C12.435 2.66699 13.95 4.19479 13.95 6.08028V10.633C13.95 12.5185 12.435 14.0463 10.5653 14.0463H6.05071C4.18102 14.0463 2.66602 12.5185 2.66602 10.633V6.08028C2.66602 4.19479 4.18102 2.66699 6.05071 2.66699ZM6.05071 17.9543H10.5653C12.435 17.9543 13.95 19.4821 13.95 21.3676V25.9203C13.95 27.8045 12.435 29.3336 10.5653 29.3336H6.05071C4.18102 29.3336 2.66602 27.8045 2.66602 25.9203V21.3676C2.66602 19.4821 4.18102 17.9543 6.05071 17.9543ZM25.948 17.9543H21.4334C19.5637 17.9543 18.0487 19.4821 18.0487 21.3676V25.9203C18.0487 27.8045 19.5637 29.3336 21.4334 29.3336H25.948C27.8177 29.3336 29.3327 27.8045 29.3327 25.9203V21.3676C29.3327 19.4821 27.8177 17.9543 25.948 17.9543Z" fill="#D85D37"/>
</svg>

<div>
<p className='text-gray-800 text-lg xl:text-2xl font-bold xl:leading-[38.40px]'>230 People Have donated</p>
<p className='xl:w-[436px] text-zinc-600 text-base font-normal  leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
</div>
    </div>




  </div>


    {/* second row */}


    <div className= ' flex flex-wrap justify-between items-center'>

<div className='flex gap-2 space-y-2 '>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path opacity="0.26" d="M21.7764 29.3337H10.2209C5.70188 29.3337 2.66602 26.1642 2.66602 21.446V10.556C2.66602 5.83781 5.70188 2.66699 10.2209 2.66699H21.7778C26.2968 2.66699 29.3327 5.83781 29.3327 10.556V21.446C29.3327 26.1642 26.2968 29.3337 21.7764 29.3337Z" fill="#D85D37"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9921 11.5666C14.9921 13.3933 13.5054 14.88 11.6788 14.88C9.85076 14.88 8.36543 13.3933 8.36543 11.5666C8.36543 9.73995 9.85076 8.25195 11.6788 8.25195C13.5054 8.25195 14.9921 9.73995 14.9921 11.5666ZM25.866 18.783C26.1767 19.0843 26.3994 19.4283 26.546 19.795C26.99 20.9043 26.7594 22.2377 26.2847 23.3363C25.722 24.6443 24.6447 25.6323 23.2874 26.0643C22.6847 26.2577 22.0527 26.3403 21.422 26.3403H10.2474C9.13536 26.3403 8.15136 26.0817 7.34469 25.5963C6.83936 25.2923 6.75003 24.5923 7.12469 24.1363C7.75136 23.3763 8.37003 22.6137 8.99403 21.8443C10.1834 20.3723 10.9847 19.9457 11.8754 20.3203C12.2367 20.475 12.5994 20.7083 12.9727 20.9537C13.9674 21.6123 15.35 22.5163 17.1714 21.535C18.4163 20.8543 19.139 19.6894 19.768 18.6754L19.7807 18.655C19.823 18.5872 19.865 18.5193 19.9068 18.4517C20.1207 18.1061 20.3314 17.7657 20.57 17.4523C20.866 17.0643 21.9647 15.851 23.3847 16.715C24.29 17.259 25.0514 17.995 25.866 18.783Z" fill="#D85D37"/>
</svg>

<div>
<p className='text-gray-800 text-lg xl:text-2xl font-bold xl:leading-[38.40px]'>30+ people joined</p>
<p className='xl:w-[436px] text-zinc-600 text-base font-normal  leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
</div>
</div>

<div className='flex gap-2  space-y-2  '>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path opacity="0.26" d="M29.3327 16.0003C29.3327 23.3643 23.3633 29.3337 15.9993 29.3337C8.63535 29.3337 2.66602 23.3643 2.66602 16.0003C2.66602 8.63766 8.63535 2.66699 15.9993 2.66699C23.3633 2.66699 29.3327 8.63766 29.3327 16.0003Z" fill="#D85D37"/>
  <path d="M21.1463 11.6071L18.9863 18.4337C18.9063 18.7137 18.6796 18.9404 18.3996 19.0217L11.5996 21.1537C11.1463 21.3017 10.7063 20.8604 10.853 20.4071L12.9863 13.5671C13.0663 13.2871 13.293 13.0737 13.573 12.9804L20.3996 10.8471C20.8663 10.7004 21.293 11.1404 21.1463 11.6071Z" fill="#D85D37"/>
</svg>

<div>
<p className='text-gray-800 text-lg xl:text-2xl font-bold xl:leading-[38.40px]'>1.2m Raised for this initiate</p>
<p className='xl:w-[436px] text-zinc-600 text-base font-normal  leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
</div>
</div>



</div>

</div>

</div>



    </section>
  )
}

export default Donation