import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { server } from '../../utils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const MakeDonation = () => {
  const { accessToken } = useAuth();
  const [donationCategories, setDonationCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    pan: '',
    email: '',
    type: 'online',
    donation: '',
    donation_type: '',
    donation_name: '',
    chooseSpecificDate: '',
    specificDate: '',
  });
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    let emailError = '';
    let mobileError = '';

    if (name === 'email') {
      if (!emailRegex.test(value)) {
        emailError = 'Please enter a valid email address';
      }
    } else if (name === 'mobile') {
      if (!mobileRegex.test(value)) {
        mobileError = 'Please enter a 10-digit mobile number';
      }
    }

    setEmailError(emailError);
    setMobileError(mobileError);

    if (name === 'donationCategory') {
      const selectedCategory = donationCategories.find(
        (category) => category.name === value
      );

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
        dated: formData.specificDate
          ? formData.specificDate.toISOString().split('T')[0]
          : '', 
        donation_name: formData.donation_name,
        donation: parseFloat(formData.donation),
        donation_type: formData.donation_type,
        type: formData.type,
      };

      const response = await axios.post(`${server}/admin/addUser`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

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

      toast.success('Donation has been done successfully');
    } catch (error) {
      setSubmitError('Please fill all the fields');
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

      setDonationCategories(response.data);
    } catch (error) {
      console.error('Error Getting Donation Category:', error);
    }
  };

  const renderLabel = (text) => (
    <label className="block text-sm font-semibold text-gray-600 mb-1">
      {text} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <div className="container mx-auto px-4 py-16 max-w-sm lg:max-w-2xl ">
      <form className="bg-white p-6 rounded-md shadow-md lg:w-[700px]">
        {/* Name */}
        <div className="mb-4">
          {renderLabel('Name')}
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
          {renderLabel('Address')}
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

        {/* Email */}
        <div className="mb-4">
          {renderLabel('Email Address')}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[300px] lg:w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          {renderLabel('Mobile Number')}
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
          {mobileError && <p className="text-red-500">{mobileError}</p>}
        </div>

        {/* Pan Card */}
        <div className="mb-4">
          {renderLabel('PAN/SSN')}
          <input
            type="number"
            id="pan"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

        {/* Choose Donation Name */}
        <div className="mb-4">
          {renderLabel('Choose Donation Category')}
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

        {/* Donation Type */}
        <div className="mb-4">
          {renderLabel('Donation Type')}
          <input
            type="text"
            id="donation_type"
            name="donation_type"
            value={formData.donation_type}
            onChange={handleChange}
            className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>

        {/* Donation Amount */}
        <div className="mb-4">
          {renderLabel('Donation Amount')}
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

        {/* Choose Specific Date */}
        <div className="mb-4">
          {renderLabel('Choose Specific Date')}
          <select
            id="chooseSpecificDate"
            name="chooseSpecificDate"
            value={formData.chooseSpecificDate}
            onChange={handleChange}
            className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
            required
          >
               <option value="">Select Yes or No</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Date Input */}
        {formData.chooseSpecificDate === 'yes' && (
          <div className="mb-4">
            {renderLabel('Select Date')}
            <DatePicker
              id="specificDate"
              name="specificDate"
              selected={formData.specificDate}
              onChange={handleDateChange}
              className="w-[300px] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange"
              required
            />
          </div>
        )}

        <div>
          {submitError && <p className="text-red-500">{submitError}</p>}
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex lg:justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-orange-500 w-[300px] text-white py-2 px-16 rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-blue"
          >
            Donate Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeDonation;
