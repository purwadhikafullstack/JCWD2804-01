'use client';
import React, { useState, useRef } from 'react';
import GuestSelector from './GuestSelector';
import DateInput from '@/components/DateInput';

const SearchBar = () => {
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const guestSelectorRef = useRef<HTMLDivElement>(null);

  const handleGuestSelectorClose = () => setIsGuestSelectorOpen(false);
  const handleGuestSelectorOpen = () =>
    setIsGuestSelectorOpen(!isGuestSelectorOpen);

  const handleClick = (event: React.MouseEvent) => {
    if (
      guestSelectorRef.current &&
      !guestSelectorRef.current.contains(event.target as Node)
    ) {
      setIsGuestSelectorOpen(false);
    }
  };

  return (
    <div
      className="bg-gray-300 text-black p-4 flex justify-between items-center relative"
      onClick={handleClick}
    >
      <input
        type="text"
        placeholder="Jakarta"
        className="px-2 py-[12px] bg-white text-black rounded w-1/2"
      />
      <div className="flex space-x-4 items-center">
        <div className="relative" ref={guestSelectorRef}>
          <button
            onClick={handleGuestSelectorOpen}
            className="px-2 py-[12px] bg-white text-black rounded flex items-center"
          >
            <span>
              {adults} Dewasa, {children} Anak
            </span>
          </button>

          {isGuestSelectorOpen && (
            <GuestSelector
              onClose={handleGuestSelectorClose}
              setAdults={setAdults}
              setChildren={setChildren}
            />
          )}
        </div>
        <DateInput />
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Cari
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
