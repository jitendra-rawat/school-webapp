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
            <th className="border-b p-4 text-left">E-mail Address</th>
            <th className="border-b p-4 text-left">Mobile Number</th>
            <th className="border-b p-4 text-left">Message</th>
      
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border-b p-4 text-sm">{item.name}</td>
              <td className="border-b p-4 text-sm">{item.email}</td>
              <td className="border-b p-4 text-sm">{item.mobile}</td>
              <td className="border-b p-4 text-sm">{item.message}</td>
          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserData = () => {
  const [messageData, setMessageData] = useState([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${server}/admin/contact`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setMessageData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMessages();
  }, [accessToken]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Messages</h1>
      <Table data={messageData} />
    </div>
  );
};

export default UserData;
