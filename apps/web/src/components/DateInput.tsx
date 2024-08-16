'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const DateInput = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const calculateTotalNights = (): number | null => {
    if (startDate && endDate) {
      const timeDifference = endDate.getTime() - startDate.getTime();
      const nightDifference = timeDifference / (1000 * 3600 * 24);
      return nightDifference;
    }
    return null;
  };

  const totalNights = calculateTotalNights();

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    return format(date, 'EEE, dd MMM yyyy', { locale: id });
  };

  return (
    <div>
      <div className="flex gap-4">
        <div className="flex items-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="flex items-center bg-gray-200 text-black border-2 rounded p-2 w-[190px] h-[50px] focus:outline-none"
            maxDate={endDate !== null ? endDate : undefined}
            customInput={
              <div className="bg-gray-200 text-black border-2 rounded p-2 w-full cursor-pointer">
                {formatDate(startDate) || 'Check In'}
              </div>
            }
          />
        </div>

        <div className="flex items-center">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="bg-gray-200 text-black border-2 rounded p-2 w-[190px] h-[50px] focus:outline-none"
            minDate={startDate !== null ? startDate : undefined}
            customInput={
              <div className="flex items-center bg-gray-200 text-black border-2 rounded p-2 w-full cursor-pointer">
                {formatDate(endDate) || 'Check Out'}
              </div>
            }
          />
        </div>

        <div className="flex items-center justify-center text-lg text-black font-semibold w-[90px]">
          {totalNights !== null && totalNights > 0 ? totalNights : 1} Malam
        </div>
      </div>
    </div>
  );
};

export default DateInput;
