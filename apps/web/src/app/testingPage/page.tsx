"use client"
import Button from '@/components/reusables/Button'
import React from 'react'

const page : React.FC = () => {
    const handleClick = () => {
        alert('Button Clicked!');
      };
  return (
    <div>
        <p className='text-red-600 text-lg'>
            kontol
        </p>
        <Button variant="primary" onClick={handleClick}>
        Primary Button
      </Button>
      <Button variant="secondary" className="mt-4">
        Secondary Button
      </Button>
      <Button variant="danger" className="mt-4" disabled>
        Disabled Danger Button
      </Button>
    </div>
  )
}

export default page