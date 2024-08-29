// components/PeakSeasonRateForm.tsx
import React, { useState } from 'react';
import { createPeakSeasonRate } from '../../../utils/api';

interface PeakSeasonRateFormProps {
  roomId: number;
}

const PeakSeasonRateForm: React.FC<PeakSeasonRateFormProps> = ({ roomId }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rateChange, setRateChange] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPeakSeasonRate(roomId, {
        start_date: new Date(startDate).toISOString(),
        end_date: new Date(endDate).toISOString(),
        rate_change: rateChange,
      });
      alert('Peak season rate set successfully.');
    } catch (error) {
      console.error('Error setting peak season rate:', error);
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rateChange">
          Rate Change (%)
        </label>
        <input
          id="rateChange"
          type="number"
          value={rateChange}
          onChange={(e) => setRateChange(parseFloat(e.target.value))}
          placeholder="Rate Change (%)"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Set Peak Rate
        </button>
      </div>
    </form>
  );
};

export default PeakSeasonRateForm;
