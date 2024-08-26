import React, { useState } from 'react';

interface GuestSelectorProps {
  onClose: () => void;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({
  onClose,
  setAdults,
  setChildren,
}) => {
  const [adults, setLocalAdults] = useState(1);
  const [children, setLocalChildren] = useState(0);

  const incrementAdults = () => {
    setLocalAdults(adults + 1);
    setAdults(adults + 1);
  };

  const decrementAdults = () => {
    if (adults > 1) {
      setLocalAdults(adults - 1);
      setAdults(adults - 1);
    }
  };

  const incrementChildren = () => {
    setLocalChildren(children + 1);
    setChildren(children + 1);
  };

  const decrementChildren = () => {
    if (children > 0) {
      setLocalChildren(children - 1);
      setChildren(children - 1);
    }
  };

  return (
    <div className="absolute bg-white text-black shadow-lg rounded p-4 mt-2 right-0">
      <div className="flex items-center justify-between text-black mb-4">
        <button onClick={decrementAdults} className="text-blue-600 text-xl">
          -
        </button>
        <span className="mx-2 text-black">{adults} Dewasa</span>
        <button onClick={incrementAdults} className="text-blue-600 text-xl">
          +
        </button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <button onClick={decrementChildren} className="text-blue-600 text-xl">
          -
        </button>
        <span className="mx-2 text-black">{children} Anak</span>
        <button onClick={incrementChildren} className="text-blue-600 text-xl">
          +
        </button>
      </div>
      <button onClick={onClose} className="text-blue-600 font-bold">
        SELESAI
      </button>
    </div>
  );
};

export default GuestSelector;
