'use client';
import React, { useState } from 'react';
import DateInput from './DateInput';
import SearchIcon from '@mui/icons-material/Search';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery) {
      console.log('Search query submitted:', searchQuery);
    } else {
      console.log('Search query is empty');
    }
  };

  return (
    <div className="h-full w-full mb-20 mt-2 flex justify-center items-center">
      <div className="flex justify-center gap-4 border-2 rounded p-4 bg-white text-black">
        <PlaceholdersAndVanishInput
          placeholders={[
            'Hotel Di Jakarta',
            'Hotel Di Bandung',
            'Hotel Di Yogyakarta',
            'Hotel Di Bali',
            'Hotel Di Surabaya',
          ]}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />

        <DateInput />
        <button className="border-2 border-gray-500 w-48 py-1 px-2 rounded-md bg-black text-white hover:bg-white hover:text-black">
          Cari
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
