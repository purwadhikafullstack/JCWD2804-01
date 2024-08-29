'use client';
import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'; // Import SweetAlert2
import axios from 'axios'; // Import Axios

const Page = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isRegister, setIsRegister] = useState<boolean>(false); // State to toggle between login and register

  useEffect(() => {
    const token = Cookies.get('LOGIN_INFO');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  // Function to handle user registration
  const handleRegister = async () => {
    try {
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;

      if (!email || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please enter both email and password!',
        });
        return;
      }

      const response = await axios.post('/api/auth/register', { email, password });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You have successfully registered!',
        });
        setIsRegister(false); // Switch to login after registration
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: response.data.message || 'Unable to register. Please try again.',
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Something went wrong!',
      });
      console.error('Error during registration:', error);
    }
  };

  // Function to handle user login
  const handleLogin = async () => {
    try {
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;

      if (!email || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please enter both email and password!',
        });
        return;
      }

      const response = await axios.post('/api/auth/login', { email, password });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
        });
        setAuthToken(response.data.token);
        Cookies.set('LOGIN_INFO', response.data.token);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: response.data.message || 'Invalid email or password.',
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Something went wrong!',
      });
      console.error('Error during login:', error);
    }
  };

  const handleGoogleLogin = () => {
    Swal.fire({
      icon: 'info',
      title: 'Google Login',
      text: 'This feature is not yet implemented.',
    });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen py-2 bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hotel2.jpg")' }}
      >
        {/* Grayed-out Filter */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Form Container */}
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">
          {isRegister ? 'Register' : 'Login'}
        </h1>

        <div className="mb-4">
          <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {isRegister ? (
          <Button
            onClick={handleRegister}
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Register
          </Button>
        ) : (
          <Button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </Button>
        )}

        <div className="flex items-center justify-center mt-4">
          <Button
            onClick={handleGoogleLogin}
            className="flex items-center px-4 py-2 bg-white border rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-black"
          >
            <FcGoogle className="mr-2" />
            Login with Google
          </Button>
        </div>

        <div className="mt-4 text-center">
          <button
            className="text-sm text-blue-500 hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? 'Already have an account? Login' : 'New user? Register here'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
