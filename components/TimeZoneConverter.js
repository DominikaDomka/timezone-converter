import React, { useState } from 'react';

const timeZones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'America/New_York', label: 'New York' },
  { value: 'Europe/London', label: 'London' },
  { value: 'Asia/Tokyo', label: 'Tokyo' },
  // Add more time zones as needed
];

const TimeZoneConverter = () => {
  const [inputDateTime, setInputDateTime] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [convertedDateTime, setConvertedDateTime] = useState('');

  const handleConvert = () => {
    if (!inputDateTime || !selectedTimeZone) return;

    const inputDate = new Date(inputDateTime);
    const options = {
      timeZone: selectedTimeZone,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    const converted = inputDate.toLocaleString('en-US', options);
    setConvertedDateTime(converted);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-green-700 py-4 px-6">
        <h2 className="text-xl font-semibold text-white">Time Zone Converter</h2>
      </div>
      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <label htmlFor="datetime-input" className="text-sm font-medium text-black">
            Your time and date:
          </label>
          <input
            id="datetime-input"
            type="datetime-local"
            value={inputDateTime}
            onChange={(e) => setInputDateTime(e.target.value)}
            className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <select
          value={selectedTimeZone}
          onChange={(e) => setSelectedTimeZone(e.target.value)}
          className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select time zone</option>
          {timeZones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
        <button 
          onClick={handleConvert} 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Convert
        </button>
        {convertedDateTime && (
          <div className="mt-4 p-3 bg-green-50 rounded-md border border-green-200">
            <p className="text-lg font-medium text-green-800">{convertedDateTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeZoneConverter;