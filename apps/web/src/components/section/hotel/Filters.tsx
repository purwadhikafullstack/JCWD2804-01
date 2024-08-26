'use client';
import React, { useEffect, useState } from 'react';

const Filters = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <aside className="space-y-4">
      <div className="bg-white rounded shadow-md p-4">
        <h3 className="font-bold text-black">Kode Voucher</h3>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Masukkan kode voucher"
            className="border p-2 w-[67%] text-black bg-white"
          />
          <button className="bg-orange-500 text-white w-24 py-2 rounded">
            Cek Kode
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow-md p-4">
        <h3 className="font-bold text-black">
          Urutkan Hasil Pencarian Berdasarkan
        </h3>
        <div className="space-y-2">
          <label className="block text-black">
            <input
              type="radio"
              name="sort"
              defaultChecked
              className="text-black"
            />{' '}
            Rekomendasi
          </label>
          <label className="block text-black">
            <input type="radio" name="sort" className="text-black" /> Rating
          </label>
          <label className="block text-black">
            <input type="radio" name="sort" className="text-black" /> Harga
            Terendah
          </label>
          <label className="block text-black">
            <input type="radio" name="sort" className="text-black" /> Promosi
          </label>
        </div>
      </div>

      <div className="bg-white rounded shadow-md p-4">
        <h3 className="font-bold text-black">Filter Nama Hotel</h3>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Masukkan Nama Hotel"
            className="border p-2 w-[67%] text-black bg-white"
          />
          <button className="bg-orange-500 text-white w-24 py-2 rounded">
            Cari Hotel
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow-md p-4">
        <h3 className="font-bold text-black">Flash Sale</h3>
        <label className="text-black">
          <input type="checkbox" className="text-black" /> Hotel Flash Sale
        </label>
      </div>

      <div className="bg-white rounded shadow-md p-4">
        <h3 className="font-bold text-black">Bintang</h3>
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="block text-yellow-500">
            <input type="checkbox" className="text-black" /> {'★'.repeat(star)}
          </label>
        ))}
      </div>

      <div className="bg-white rounded shadow-md p-4">
        <h3 className="font-bold text-black">Fasilitas</h3>
        <div className="space-y-2">
          {[
            'Termasuk Sarapan',
            'Safe Stay',
            'Swimming pool',
            'Free Wifi',
            'Lift',
            'Restaurant',
            'Free self parking',
            'Airport Transfer',
            '24-hour front desk',
            'Fitness center',
            'Meeting Rooms',
          ].map((facility, index) => (
            <label key={index} className="block text-black">
              <input type="checkbox" className="text-black" /> {facility}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Filters;
