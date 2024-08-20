import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const ProfilePage = () => {
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
