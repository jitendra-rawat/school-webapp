import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { server } from '../../utils';


const ResetPassword = () => {
  const { accessToken } = useAuth();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (newPassword !== confirmPassword) {
    //   setPasswordError('Passwords do not match');
    //   return;
    // }

    try {
      setLoading(true);

      const response = await axios.post(
        `${server}/auth/reset-password-admin`,
        {
          newPassword:newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Password reset successful:', response.data);
      setResetSuccess(true);
      setNewPassword('');
      setConfirmPassword('');
      setPasswordError('');
    } catch (error) {
      console.error('Error resetting password:', error);
      setPasswordError('Error resetting password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:py-24 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Your Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <label htmlFor="new-password" className="sr-only">
                New Password
              </label>
           
              <input
 
  name="newPassword"
  type="password"
  value={newPassword} 
  onChange={(e) => setNewPassword(e.target.value)}
  required
  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm"
  placeholder="Enter New Password"
/>

            </div>

       <div className="py-2">
              <label htmlFor="confirmNewPassword" className="sr-only">
                Confirm New Password
              </label>
              <input
               
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm"
                placeholder="Confirm New Password"
              />
            </div> 
          </div>

          {/*  password matching error */}
          {passwordError && (
            <div className="text-red-500 text-sm">{passwordError}</div>
          )}

          {/*  success message */}
          {resetSuccess && (
            <div className="text-green-500 text-sm">
              Password reset successful!
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange hover:bg-orange-700 focus:outline-none"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
