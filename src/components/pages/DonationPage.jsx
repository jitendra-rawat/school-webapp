import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';

const MakeDonationContent = () => {

  const { accessToken } = useAuth();



  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobileNumber: '',
    email: '',
    donationAmount: '',
    reasonForDonating: '',
    donationMethod: 'cash',
    donationCategory: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
   
      const response = await axios.post(
        'http://5.2.89.174:3000/admin/addUser',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('API response of make donation:', response.data);
    
      setFormData({
        name: '',
        address: '',
        pin: '',
        mobileNumber: '',
        email: '',
        donationAmount: '',
        reasonForDonating: '',
        
        donationCategory: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
 
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl ">
  
      <form  className=" bg-white p-6 rounded-md shadow-md lg:w-[700px]">

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-600 mb-1">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

          {/* Pin */}

          <div className="mb-4">
          <label htmlFor="pin" className="block text-sm font-semibold text-gray-600 mb-1">Pincode</label>
          <input
            type="text"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

         {/* Country */}

         <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-semibold text-gray-600 mb-1">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>


         {/* Email */}
         <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>



        {/* Mobile Number */}
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-600 mb-1">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

       

     

        {/* Reason for Donating */}
        <div className="mb-4">
          <label htmlFor="reasonForDonating" className="block text-sm font-semibold text-gray-600 mb-1">Reason for Donating</label>
          <textarea
            id="reasonForDonating"
            name="reasonForDonating"
            value={formData.reasonForDonating}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>


 {/* Donation Category */}
 <div className="mb-4">
          <label htmlFor="donationCategory" className="block text-sm font-semibold text-gray-600 mb-1">Donation Category</label>
          <select
            id="donationCategory"
            name="donationCategory"
            value={formData.donationCategory}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          >
          <option value=""> </option>
            <option value="breakfastMeal">Breakfast Meal- 2,100/-</option>
            <option value="LunchMeal">Lunch (Meals)- 4,100/-</option>
            <option value="eveningSnacks">	Evening Tea/Milk with Snacks- 2,100/- </option>
            <option value="dinnerMeal">Dinner (Meals)- 4,100/-</option>
            <option value="purchaseBraillers">Purchase of Braillers (Edu. Material)- 20,000/-</option>
            <option value="brailleKit">Braille Kit (Edu. Material)- 500/-</option>
            <option value="harmonium">Harmonium (Musical Instrument)- 5,000/-</option>
            <option value="tabla">Pair of Tablas (Musical Instrument)- 2,500/-</option>
            <option value="sitar">	Sitar (Musical Instrument)- 3,000/-</option>
            <option value="computer">	Computer System (Edu. Material)- 30,000/-</option>
            <option value="uniform">School Uniform & Pair of Shoes (per child)- 4,000/-</option>
            <option value="braillePaper">Braille Paper (per student/per year)- 2,000/-</option>
            <option value="ugCourse">Sponsor a student for under-graduation course for one year- 50,000/-</option>
        <option value="pgCourse">Sponsor a student for post-graduate courses for one year- 70,000/-</option>
        <option value="other">Other</option>
          </select>
        </div>

           {/* Donation Amount */}
           <div className="mb-4">
          <label htmlFor="donationAmount" className="block text-sm font-semibold text-gray-600 mb-1">Donation Amount</label>
          <input
            type="text"
            id="donationAmount"
            name="donationAmount"
            value={formData.donationAmount}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

   

       

        

        

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button

onClick={handleSubmit}
            type="submit"
            className=" bg-orange text-white py-2 px-16 rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-blue"
          >
           Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeDonationContent;

