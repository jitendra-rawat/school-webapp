import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';

import { server } from '../../utils';

const DonationTable = ({ data }) => {
  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border-b px-6 py-4">Name</th>
            <th className="border-b px-6 py-4">Address</th>
            <th className="border-b px-6 py-4">Mobile Number</th>
            <th className="border-b px-6 py-4">PAN</th>
            <th className="border-b px-6 py-4">Donation Amount</th>
            <th className="border-b px-6 py-4">Donation Method</th>
            <th className="border-b px-6 py-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border-b px-6 py-4 text-sm">{item.name}</td>
              <td className="border-b px-6 py-4 text-sm">{item.address}</td>
              <td className="border-b px-6 py-4 text-sm">{item.mobile}</td>
              <td className="border-b px-6 py-4 text-sm">{item.pan}</td>
              <td className="border-b px-6 py-4 text-sm">₹{item.donation}</td>
              <td className="border-b px-6 py-4 text-sm">{item.type}</td>
              <td className="border-b px-6 py-4 text-sm">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserData = () => {
  const { accessToken } = useAuth();
  const [donationData, setDonationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}/admin/users`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setDonationData(response.data);
      } catch (error) {
        if (error.response) {
          console.error('Server error:', error.response.data);
          setError('Server error. Please try again later.');
        } else if (error.request) {
          console.error('Request made but no response received:', error.request);
          setError('Network error. Please check your internet connection.');
        } else {
          console.error('Error during request setup:', error.message);
          setError('An unexpected error occurred. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchData();
    } else {
      setError('Access token is missing or invalid.');
      setLoading(false);
    }
  }, [accessToken]);

  return (
    <div className="container mx-auto px-4 py-16 lg:py-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Donation Details</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <DonationTable data={donationData} />
      )}
    </div>
  );
};

export default UserData;
