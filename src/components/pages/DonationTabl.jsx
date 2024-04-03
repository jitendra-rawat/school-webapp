// src/DonationTable.js

import React from 'react';

function DonationTable() {
  const donationData = [
    { serial: '1', purpose: 'Breakfast (Meals)', amount: '2,100/-' },
    { serial: '2', purpose: 'Lunch (Meals)', amount: '4,100/-' },
    { serial: '3', purpose: 'Evening Tea/Milk with Snacks', amount: '2,100/-' },
    { serial: '4', purpose: 'Dinner (Meals)', amount: '4,100/-' },
    { serial: '5', purpose: '	Purchase of Braillers (Edu. Material)', amount: '20,000/-' },
    { serial: '6', purpose: '	Braille Kit (Edu. Material)', amount: '500/-' },
    { serial: '7', purpose: '	Harmonium (Musical Instrument)', amount: '5,000/-' },
    { serial: '8', purpose: '	Pair of Tablas (Musical Instrument)', amount: '2,500/-' },
    { serial: '9', purpose: 'Sitar (Musical Instrument)', amount: '3,000/-' },
    { serial: '10', purpose: 'Computer System (Edu. Material)', amount: '30,000/-' },
    { serial: '11', purpose: '	School Uniform & Pair of Shoes (per child)', amount: '4,000/-' },
    { serial: '12', purpose: '	Braille Paper (per student/per year)', amount: '2,000/-' },
    { serial: '13', purpose: 'Sponsor a student for under-graduation course for one year', amount: '50,000/-' },
    { serial: '14', purpose: '	Sponsor a student for post-graduate courses for one year', amount: '70,000/-' },
  
  ];

  return (
    <div className=" min-h-screen lg:p-8">
      <h2 className="lg:text-4xl text-2xl font-bold mb-8">Donation List</h2>
      <table className="min-w-full bg-white border rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border text-sm lg:text-base">S.No</th>
            <th className="py-2 px-4 border text-sm lg:text-base">Options/Purpose</th>
            <th className="py-2 px-4 border text-sm lg:text-base">Donation(₹)</th>
          </tr>
        </thead>
        <tbody>
          {donationData.map((donation, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border  text-sm lg:text-base">{donation.serial}</td>
              <td className="py-2 px-4 border  text-sm lg:text-base">{donation.purpose}</td>
              <td className="py-2 px-4 border  text-sm lg:text-base">₹{donation.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonationTable;
