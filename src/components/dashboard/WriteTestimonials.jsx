import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';

import { server } from '../../utils';

const Testimonial = () => {
  const { accessToken } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    testimonial: '',
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
        `${server}/admin/addTestimonial`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // console.log('Testimonial added successfully:', response.data);

   
      setFormData({
        name: '',
        designation: '',
        testimonial: '',
      });
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  return (
    <div className="px-4 pt-16 container mx-auto max-w-sm lg:max-w-md">
      <form onSubmit={handleSubmit}>
        {['name', 'designation', 'testimonial'].map((field) => (
          <div key={field} className="mb-4">
            <label htmlFor={field} className="block text-gray-800 font-semibold mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            {field === 'testimonial' ? (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-[300px] lg:w-[500px] h-32"
                required
              />
            ) : (
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-[300px] lg:w-[500px]"
                required
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-orange-500 text-white p-4 rounded focus:outline-none focus:ring focus:border-orange hover:from-orange"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
};

export default Testimonial;
