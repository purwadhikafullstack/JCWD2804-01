import React from 'react';
import SearchBar from '@/components/section/hotel/SearchBar';
import Filters from '@/components/section/hotel/Filters';
import HotelCard from '@/components/section/hotel/HotelCard';

const hotels = [
  {
    name: 'The Risman Hotel',
    address:
      'Jalan Cengkareng Business City Ruko 12 H / 18-19, 15125 Gardu, Indonesia',
    rating: 2,
    price: '476.000',
    image: '/images/hotel1.jpg',
  },
  {
    name: 'City Park By Pelangi Nusantara Room',
    address: 'Jl. Kapuk Cengkareng No. 6, Rt 9/Rw 14',
    rating: 3,
    price: '352.000',
    image: '/images/hotel2.jpg',
  },
  {
    name: 'Morrissey Hotel Residences',
    address: 'Jalan K.H. Wahid Hasyim No. 70',
    rating: 4,
    price: '1.268.000',
    image: '',
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SearchBar />
      <div className="container px-28 mx-auto flex pt-6">
        <div className="w-2/6 pr-4">
          <Filters />
        </div>
        <div className="w-4/6">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
