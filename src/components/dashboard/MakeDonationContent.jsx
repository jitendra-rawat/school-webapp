import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { server } from '../../utils';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const MakeDonationContent = () => {
  const { accessToken } = useAuth();
  const [donationCategories, setDonationCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    pan: '',
    email: '',
    type: 'Cash',
    donation: '',
    donation_type: '',
    donation_name: '',
    chooseSpecificDate: 'No',
    specificDate: new Date('2024-01-15'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'donationCategory') {
      const selectedCategory = donationCategories.find(category => category.name === value);

      setFormData((prevData) => ({
        ...prevData,
        donation_name: selectedCategory ? selectedCategory.name : '',
        donation_type: selectedCategory ? selectedCategory.type : '',
        [name]: value,
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      specificDate: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        address: formData.address,
        email: formData.email,
        mobile: formData.mobile,
        pan: formData.pan,
        dated: formData.specificDate.toISOString().split('T')[0],
        donation_name: formData.donation_name,
        donation: parseFloat(formData.donation),
        donation_type: formData.donation_type,
        type: formData.type,
      };

      const response = await axios.post(
        `${server}/admin/addUser`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // console.log('API response of make donation:', response.data);

      setFormData({
        name: '',
        address: '',
        pan: '',
        mobile: '',
        email: '',
        donation_name: '',
        donation: '',
        donation_type: '',
        type: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const response = await axios.get(`${server}/admin/getCategory`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      // console.log('Getting Donation Category:', response.data);

      setDonationCategories(response.data);

    } catch (error) {
      console.error('Error Getting Donation Category:', error);
    }
  };

    
  return (
    <div className="container mx-auto px-4 py-16 max-w-sm lg:max-w-2xl ">
  
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
            className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
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
            className="w-[300px] lg:w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>


    {/* email */}
    <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">E-mail Adderess</label>
          <input
            type="text"
            
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[300px] lg:w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>



        {/* Mobile Number */}
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-600 mb-1">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>


        {/* Pan card */}


        <div className="mb-4">
          <label htmlFor="ssn" className="block text-sm font-semibold text-gray-600 mb-1">PAN/SSN</label>
          <input
            type="number"
         
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>


 
    {/* Choose Donation Name */}

    <div className="mb-4">
  <label htmlFor="donationCategory" className="block text-sm font-semibold text-gray-600 mb-1">
    Choose Donation Name
  </label>
  <select
    id="donationCategory"
    name="donation_name"
    value={formData.donationCategory}
    onChange={handleChange}
    className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
    required
  >
    <option value="">Select Donation Category</option>
    {donationCategories.map((category) => (
      <option key={category._id} value={category.name}>
        {category.name}
      </option>
    ))}
  </select>
</div>
   


  {/* donation type */}


  <div className="mb-4">
          <label htmlFor="donation_type" className="block text-sm font-semibold text-gray-600 mb-1">Donation Type</label>
          <input
            type="text"
            name="donation_type"
            value={formData.donation_type}
            onChange={handleChange}
            className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
         
          />
        </div>

       
  {/* choose date */}


{/* 
  {
  formData.chooseDonationCategory === "food" && (
    <div className="mb-4">
      <label htmlFor="chooseSpecificDate" className="block text-sm font-semibold text-gray-600 mb-1">
        Choose Specific Date
      </label>
      <select
        id="chooseSpecificDate"
        name="chooseSpecificDate"
        value={formData.chooseSpecificDate}
        onChange={handleChange}
        className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
        required
      >
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
    </div>
  )}

{formData.chooseDonationCategory === "food" && formData.chooseSpecificDate === 'Yes' && (
  <div className="mb-4">
    <label htmlFor="specificDate" className="block text-sm font-semibold text-gray-600 mb-1">
      Specific Date
    </label>
    <DatePicker
      id="specificDate"
      selected={formData.specificDate}
      onChange={handleDateChange}
      className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
      dateFormat="MMMM d, yyyy"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  </div>
)} */}

   
     





           {/* Donation Amount */}
           <div className="mb-4">
          <label htmlFor="donationAmount" className="block text-sm font-semibold text-gray-600 mb-1">Donation Amount</label>
          <input
            type="text"
            id="donationAmount"
            name="donation"
            value={formData.donation}
            onChange={handleChange}
            className="w-[300px] lg:w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>


        {/* Submit Button */}
        <div className="mt-6 flex lg:justify-center">
          <button

onClick={handleSubmit}
            type="submit"
            className=" bg-orange w-[300px]   text-white py-2 px-16 rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-blue"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeDonationContent;

