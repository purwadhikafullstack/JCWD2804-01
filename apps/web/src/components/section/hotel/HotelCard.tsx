import React from 'react';

interface Hotel {
  name: string;
  address: string;
  rating: number;
  price: string;
  image: string;
}

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="flex h-[210px] p-4 bg-white rounded-lg shadow-md mb-4 text-black items-center">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-1/3 h-full object-cover rounded-lg"
      />

      <div className="w-2/3 pl-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="font-bold text-xl">{hotel.name}</h2>
          <div className="flex items-center mt-1">
            <div className="text-yellow-500 flex items-center">
              {'★'.repeat(hotel.rating)}
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-2 flex items-center">
            {hotel.address}
          </p>
        </div>

        <div className="flex justify-end items-end">
          <div className="text-right">
            <p className="text-orange-600 font-bold text-lg">
              Rp {hotel.price}
            </p>
            <p className="text-sm text-gray-500">harga per malam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
