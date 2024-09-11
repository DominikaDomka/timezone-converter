import React, { useState } from 'react';

const timeZones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'Africa/Abidjan', label: 'Africa/Abidjan' },
  { value: 'Africa/Accra', label: 'Africa/Accra' },
  { value: 'Africa/Algiers', label: 'Africa/Algiers' },
  { value: 'Africa/Cairo', label: 'Africa/Cairo' },
  { value: 'Africa/Casablanca', label: 'Africa/Casablanca' },
  { value: 'Africa/Johannesburg', label: 'Africa/Johannesburg' },
  { value: 'Africa/Lagos', label: 'Africa/Lagos' },
  { value: 'Africa/Nairobi', label: 'Africa/Nairobi' },
  { value: 'America/Anchorage', label: 'America/Anchorage' },
  { value: 'America/Bogota', label: 'America/Bogota' },
  { value: 'America/Chicago', label: 'America/Chicago' },
  { value: 'America/Denver', label: 'America/Denver' },
  { value: 'America/Halifax', label: 'America/Halifax' },
  { value: 'America/Los_Angeles', label: 'America/Los Angeles' },
  { value: 'America/Mexico_City', label: 'America/Mexico City' },
  { value: 'America/New_York', label: 'America/New York' },
  { value: 'America/Phoenix', label: 'America/Phoenix' },
  { value: 'America/Santiago', label: 'America/Santiago' },
  { value: 'America/Sao_Paulo', label: 'America/Sao Paulo' },
  { value: 'America/St_Johns', label: 'America/St. John\'s' },
  { value: 'America/Toronto', label: 'America/Toronto' },
  { value: 'America/Vancouver', label: 'America/Vancouver' },
  { value: 'Asia/Bangkok', label: 'Asia/Bangkok' },
  { value: 'Asia/Dubai', label: 'Asia/Dubai' },
  { value: 'Asia/Hong_Kong', label: 'Asia/Hong Kong' },
  { value: 'Asia/Jakarta', label: 'Asia/Jakarta' },
  { value: 'Asia/Jerusalem', label: 'Asia/Jerusalem' },
  { value: 'Asia/Karachi', label: 'Asia/Karachi' },
  { value: 'Asia/Kolkata', label: 'Asia/Kolkata' },
  { value: 'Asia/Kuwait', label: 'Asia/Kuwait' },
  { value: 'Asia/Manila', label: 'Asia/Manila' },
  { value: 'Asia/Seoul', label: 'Asia/Seoul' },
  { value: 'Asia/Shanghai', label: 'Asia/Shanghai' },
  { value: 'Asia/Singapore', label: 'Asia/Singapore' },
  { value: 'Asia/Tokyo', label: 'Asia/Tokyo' },
  { value: 'Australia/Adelaide', label: 'Australia/Adelaide' },
  { value: 'Australia/Brisbane', label: 'Australia/Brisbane' },
  { value: 'Australia/Darwin', label: 'Australia/Darwin' },
  { value: 'Australia/Melbourne', label: 'Australia/Melbourne' },
  { value: 'Australia/Perth', label: 'Australia/Perth' },
  { value: 'Australia/Sydney', label: 'Australia/Sydney' },
  { value: 'Europe/Amsterdam', label: 'Europe/Amsterdam' },
  { value: 'Europe/Athens', label: 'Europe/Athens' },
  { value: 'Europe/Berlin', label: 'Europe/Berlin' },
  { value: 'Europe/Brussels', label: 'Europe/Brussels' },
  { value: 'Europe/Budapest', label: 'Europe/Budapest' },
  { value: 'Europe/Copenhagen', label: 'Europe/Copenhagen' },
  { value: 'Europe/Dublin', label: 'Europe/Dublin' },
  { value: 'Europe/Helsinki', label: 'Europe/Helsinki' },
  { value: 'Europe/Istanbul', label: 'Europe/Istanbul' },
  { value: 'Europe/Lisbon', label: 'Europe/Lisbon' },
  { value: 'Europe/London', label: 'Europe/London' },
  { value: 'Europe/Madrid', label: 'Europe/Madrid' },
  { value: 'Europe/Moscow', label: 'Europe/Moscow' },
  { value: 'Europe/Oslo', label: 'Europe/Oslo' },
  { value: 'Europe/Paris', label: 'Europe/Paris' },
  { value: 'Europe/Prague', label: 'Europe/Prague' },
  { value: 'Europe/Rome', label: 'Europe/Rome' },
  { value: 'Europe/Stockholm', label: 'Europe/Stockholm' },
  { value: 'Europe/Vienna', label: 'Europe/Vienna' },
  { value: 'Europe/Warsaw', label: 'Europe/Warsaw' },
  { value: 'Europe/Zurich', label: 'Europe/Zurich' },
  { value: 'Pacific/Auckland', label: 'Pacific/Auckland' },
  { value: 'Pacific/Fiji', label: 'Pacific/Fiji' },
  { value: 'Pacific/Honolulu', label: 'Pacific/Honolulu' },
  { value: 'Pacific/Midway', label: 'Pacific/Midway' },
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
    <div className="w-full max-w-md mx-auto">
      <div className="bg-green-700 py-4 px-6 rounded-t-lg">
        <h2 className="text-xl font-semibold text-white">Time Zone Converter</h2>
      </div>
      <div className="space-y-5 p-6 border border-green-200 rounded-b-lg">
        <div className="space-y-2">
          <label htmlFor="datetime-input" className="text-sm font-medium text-green-800">
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