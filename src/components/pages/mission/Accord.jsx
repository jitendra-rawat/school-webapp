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
    title: ' Title',
    description: ' Description goes here.',
  },
  {
    title: ' 2 Title',
    description: ' Description goes here.',
  },
  {
    title: '3 Title',
    description: 'Box 3 Description goes here.',
  },
  {
    title: ' 4 Title',
    description: ' Box 4 Description goes here.',
  },
];

const ThreeAccordions = () => {
  return (
    <Accordion allowZeroExpanded>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} className="xl:w-[600px] py-4 rounded-2xl ">
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
