import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import ReactPaginate from 'react-paginate'; 
import { server } from '../../utils';

const UserData = () => {
  const { accessToken } = useAuth();
  const [donationData, setDonationData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;

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

  // Pagination logic
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = donationData ? Math.ceil(donationData.length / usersPerPage) : 0;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container mx-auto px-4 py-16 lg:py-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Donation Details</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : donationData ? ( 
        <>
          <DonationTable
            data={donationData.slice(pagesVisited, pagesVisited + usersPerPage)}
          />
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'pagination'}
            previousLinkClassName={'pagination__link'}
            nextLinkClassName={'pagination__link'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active'}
            className='flex justify-center gap-4'
          />
        </>
      ) : (
        <p className="text-center">No donation data available.</p>
      )}
    </div>
  );
};

export default UserData;



const DonationTable = ({ data }) => {
  return (
    <div className=" overflow-auto h-screen">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border-b px-2 py-4 text-sm">Name</th>
            <th className="border-b px-2 py-4 text-sm">Address</th>
            <th className="border-b px-2 py-4 text-sm">Mobile Number</th>
            <th className="border-b px-2 py-4 text-sm">PAN</th>
            <th className="border-b px-2 py-4 text-sm">Amount</th>
        
            <th className="border-b px-2 py-4 text-sm">Donation Name</th>
          
            <th className="border-b px-2 py-4 text-sm">Category</th>
            <th className="border-b px-2 py-4 text-sm">Method</th>
            <th className="border-b px-2 py-4 text-sm">Date</th>
       
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border-b px-2 py-4 text-sm">{item.name}</td>
              <td className="border-b px-2 py-4 text-sm">{item.address}</td>
              <td className="border-b px-2 py-4 text-sm">{item.mobile}</td>
              <td className="border-b px-2 py-4 text-sm">{item.pan}</td>
              <td className="border-b px-2 py-4 text-sm">₹{item.donation}</td>
              <td className="border-b px-2 py-4 text-sm">{item.donation_name}</td>
              <td className="border-b px-2 py-4 text-sm">{item.donation_type}</td>
              <td className="border-b px-2 py-4 text-sm">{item.type}</td>
              <td className="border-b px-2 py-4 text-sm">{item.specificDate}</td>

        
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
