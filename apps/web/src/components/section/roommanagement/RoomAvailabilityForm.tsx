// components/RoomAvailabilityForm.tsx
import React, { useState } from 'react';
import { createRoomAvailability } from '../../../utils/api';

interface RoomAvailabilityFormProps {
  roomId: number;
}

const RoomAvailabilityForm: React.FC<RoomAvailabilityFormProps> = ({ roomId }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createRoomAvailability(roomId, {
        start_date: new Date(startDate).toISOString(),
        end_date: new Date(endDate).toISOString(),
        is_available: isAvailable,
      });
      alert('Room availability set successfully.');
    } catch (error) {
      console.error('Error setting room availability:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
          Start Date
        </label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
          End Date
        </label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isAvailable">
          Availability
        </label>
        <select
          id="isAvailable"
          value={isAvailable ? 'true' : 'false'}
          onChange={(e) => setIsAvailable(e.target.value === 'true')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Set Availability
        </button>
      </div>
    </form>
  );
};

export default RoomAvailabilityForm;
