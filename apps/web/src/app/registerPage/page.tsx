import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label';


const page = () => {
  return (
    <div className='flex w-[100%] h-screen'>
        <div className='flex-grow'>
            <img src="hotel2.jpg" alt="Hotel" className='w-full h-full object-cover' />
        </div>
        <div className='w-[30%] p-5 bg-white border border-gray-300 rounded-md shadow-md flex flex-col gap-3 my-auto'>
           <form action="" className='flex flex-col gap-3'>
            <div>
            <Label htmlFor='name'>Your Name</Label>
            <Input id="name" placeholder='name'/> 
            <Label htmlFor='email'>Email</Label>
            <Input id="email" type="email" placeholder='email'/>
            <Label htmlFor='password'>Password</Label>
            <Input id="password"type="password" placeholder='password'/> 
            </div>
            <div className='flex flex-col gap-1'>
            <Button className='rounded-md bg-azure-400 px-12 w-full' >
                Register
            </Button>
            <Button className='rounded-md bg-azure-400 px-12 w-full' >
            <FcGoogle /> continue with google
            </Button>
            </div>    
            
           </form>
        </div>
    </div>
  )
}

export default page
