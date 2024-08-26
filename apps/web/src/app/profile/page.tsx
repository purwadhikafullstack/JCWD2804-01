'use client';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const ProfilePage = () => {
  // const [authToken, setAuthToken] = useState<string | null>(null);

  // useEffect(() => {
  //   const token = Cookies.get('LOGIN_INFO');

  //   if (token) {
  //     setAuthToken(token);
  //   } else {
  //     setAuthToken(null);
  //   }
  // }, []);

  // if (!authToken) {
  //   return (
  //     <div className="flex justify-center items-center h-screen p-8 bg-azure-100">
  //       <div className="text-center bg-white p-6 border border-gray-300 rounded-md shadow-md">
  //         <h2 className="text-xl text-black font-semibold">
  //           Kamu tidak bisa akses halaman ini
  //         </h2>
  //         <button
  //           onClick={() => (window.location.href = '/loginpage')}
  //           className="border-2 border-black mt-2 px-3 py-1 rounded-md bg-black text-white hover:bg-white hover:text-black"
  //         >
  //           Pergi Login
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex justify-center items-center h-screen p-8 bg-azure-100">
      <Card className="w-full max-w-md p-6 bg-white border border-gray-300 rounded-md shadow-md">
        <CardHeader className="flex flex-col items-center mb-4">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src="profile-pic.jpg" alt="Profile Picture" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <CardTitle className="text-xl font-semibold">John Doe</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div>
            <Label className="font-semibold">Age:</Label>
            <p>30</p>
          </div>
          <div>
            <Label className="font-semibold">Gender:</Label>
            <p>Male</p>
          </div>
          <div>
            <Label className="font-semibold">Email:</Label>
            <p>johndoe@example.com</p>
          </div>
          <div>
            <Label className="font-semibold">Phone Number:</Label>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <Label className="font-semibold">Address:</Label>
            <p>1234 Elm Street, Springfield, IL 62704</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
