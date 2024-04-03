import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const accordionData = [
  {
    title: ' Education',
    description: 'The school provides regular classes from grade 1 to grade 10, employing trained teachers. The curriculum, approved by the Education Department, Uttarakhand, is taught in Braille script.',
  },
  {
    title: 'Music Education',
    description: 'Students receive music education in singing and playing instruments, following the curriculum of Prayag Sangeet Samiti University, Allahabad, with proper instruments provided.',
  },
  {
    title: 'Typing and Computer Training',
    description: 'To promote self-reliance, typing, and computer training started in 2000, equipped with English and Hindi typing machines and a qualified instructor.',
  },
  {
    title: ' Handicraft Training',
    description: 'Blind children are trained in handicrafts like basket making, chair weaving, and candle making alongside regular education.',
  },
  {
    title: ' Spinning Weaving Training',
    description: 'Training in spinning and weaving, creating items like bed sheets and mats, helps blind children gain skills for independent living.',
  },
  {
    title: ' Library and Reading Room',
    description: 'The well-maintained library has around 2000 books in Braille and 1000 cited books, along with newspapers and magazines.',
  },
  {
    title: 'Medical Arrangement',
    description: 'A part-time MBBS doctor conducts weekly health check-ups, and a dispensary provides medicines and general medical equipment.',
  },
  {
    title: 'Mess Arrangement',
    description: `The school's mess accommodates 200 students, offering regular meals and special arrangements twice a week.`,
  },
  {
    title: 'Hostel Arrangement',
    description: 'A separate hostel for blind students with airy rooms, toilets, and bathrooms accommodates about 150 students, with dedicated staff.',
  },
  {
    title: 'Entertainment and Sports',
    description: 'The school provides radios, tape recorders, TVs, and indoor games. Students participate in sports and music competitions for holistic development.',
  },
];

const ThreeAccordions = () => {
  return (
    <Accordion allowZeroExpanded>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} className="lg:w-[500px] xl:w-[600px] py-4 rounded-2xl ">
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3 className="accordion-title">{item.title}</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{item.description}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ThreeAccordions;
