import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { useAuth } from '../context/authContext';

import { server } from '../../utils';

const Table = ({ data, onDelete }) => {

  return (

    <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="border-b p-4 text-left">Name</th>
        <th className="border-b p-4 text-left">Designation</th>
        <th className="border-b p-4 text-left">Testimonial</th>
        <th className="border-b p-4 text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id} className="hover:bg-gray-100">
          <td className="border-b p-4 text-sm">{item.name}</td>
          <td className="border-b p-4 text-sm">{item.designation}</td>
          <td className="border-b p-4 text-sm">{item.testimonial}</td>
          <td
            onClick={() => onDelete(item.id)}
            className="cursor-pointer border-b p-4 text-sm"
          >
            <MdDelete />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

const UserData = () => {

  const [testimonialData, setTestimonialData] = useState([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    axios.get(`${server}/tesimonial`)
      .then((response) => setTestimonialData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = async (testimonialId) => {
    try {
      await axios.delete(`${server}/admin/deleteTestimonial/${testimonialId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    
      setTestimonialData(testimonialData.filter(item => item.id !== testimonialId));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Testimonials Details</h1>
      <Table data={testimonialData} onDelete={handleDelete} />
    </div>
  );
};

export default UserData;
