import React from 'react'
import DonateWork from './DonateWork';


const Card = ({ imageUrl, title, description }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md w-[400px] h-[700px] ">
        <img src={imageUrl} alt={title} className="w-full h-[300px] object-cover object-center" />
        <div className="p-4">
          <h2 className="text-lg xl:text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-sm text-justify font-roboto">{description}</p>
        </div>
      </div>
    );
  };
  
  const cardData = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'title',
      description: 'Our school gives free education to both Blind and sighted boys. At present an integrated education is imparted up to class 10th. In this system there are about 450 children studying at present. Among these 77 students are blind and belong to the age group 6-14 years. This integrated arrangement helps boost the morale of our students. It makes a strong base of tolerance and social adjustment among both kind of students. It is a great success in itself as both sighted and blind students understand each other in a good way. The school timings are from 7:30 AM to 1:00PM in summers and from 8:00 AM to 2:00 PM in the winters.',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'title',
      description: 'We have vested with the complete facilities of providing education to the blinds using “Braille”. The education is based on the courses prescribed by the Government of Uttarakhand. Along with that our students are given skill based training in various handicrafts like making of Candles, Hindi-English typewriting, computer operation, different types of quality weaving and knitting, towels, bed-sheets, covers and dusters etc. ',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/400',
      title: 'title',
      description: 'The blind children are also given training in Music both Vocal and Instrumental. The training include classical and other forms of music. They work on modern musical instruments, Tablas, Harmonium, Sitar, Dholak etc. The musical training is provided in accordance with the syllabus prescribed by the Board of School Education, Uttarakhand, CBSE and NCERT.',
    },
  
  ];
  

const OurWork = () => {
  return (
    
     <section>


                {/* header banner */}
                <div className='py-20 xl:pt-48 work-bg bg-opacity-25'>
  <div className='max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container'>
  <p className='xl:py-24 xl:text-[50px] text-2xl font-extrabold text-white '>Our Work</p>
  </div>

</div>



             {/* Our working */}
      <div className="py-10 xl:py-20">
        <h3 className="text-center text-black text-lg xl:text-[50px] font-bold  xl:leading-[61px]">We are Working for the Good Cause</h3>
        <p className="pb-8 text-center font-roboto text-neutral-700 text-base xl:text-lg font-normal leading-[30px] max-w-[740px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus vel, fugit laborum nobis soluta corporis! At aliquid voluptates et!
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {cardData.map((card) => (
            <Card key={card.id} imageUrl={card.imageUrl} title={card.title} description={card.description} width="w-[400px]" />
          ))}
        </div>
      </div>


        {/* donate */}


<DonateWork />


     {/* banner */}


       <div className='bg-orange py-20 '>

        <div className='max-w-sm   md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto container'>


            {/* heading */}

            <div className='flex flex-wrap justify-between '>

                {/* left heading */}


                <div className="xl:w-[600.23px] xl:h-[107.19px] text-white text-lg xl:text-[46px] font-bold  xl:leading-[55.20px]">ACF PRO - Advanced Custom Fields Plugin included for free</div>



                {/* right heading */}

                <div className="xl:w-[350px] text-white text-sm xl:text-[15px] font-normal py-2">Use the Advanced Custom Fields plugin to take full<br/>control of your WordPress edit screens & custom field data.</div>

            </div>


            {/* icons */}


            <div className='xl:py-24 py-8 flex flex-wrap justify-between items-center'>

                {/* first icon */}

                <div className='flex items-center gap-2 py-2'>

            
              <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png" alt="" />

                    <div className="text-white text-lg xl:text-2xl font-bold font-['Manrope'] leading-[37.50px]">Add fields on demand</div>
           

                    

                </div>


                  {/* second icon */}


                  <div className='flex items-center gap-2 py-2'>

            
<img className='w-12' src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png" alt="" />

      <div className="text-white text-lg xl:text-2xl font-bold font-['Manrope'] leading-[37.50px]">Add fields on demand</div>


      

  </div>


                     {/* third icon */}


                     <div className='flex items-center gap-2 py-2'>

            
<img className='w-12' src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png" alt="" />

      <div className="text-white text-lg xl:text-2xl font-bold font-['Manrope'] leading-[37.50px]">Add fields on demand</div>


      

  </div>
            </div>




        </div>

       </div>



     </section>

  )
}

export default OurWork