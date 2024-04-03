import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { server } from '../../utils';

const AddCategory = () => {
  const { accessToken } = useAuth();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const initialFormData = {
    name: '',
    amount: '',
    type: '',
  };

  const [formData, setFormData] = useState(initialFormData);

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
        `${server}/admin/addCategory`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

   
      setFormData(initialFormData);

      console.log('Category added successfully:', response.data);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4 mt-20">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
           Donation Category Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-800 font-semibold mb-2">
        Donation Category    Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-800 font-semibold mb-2">
          Donation Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>



        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

        <button
          type="submit"
          className="bg-orange-500 text-white p-4 rounded focus:outline-none hover:from-orange"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
