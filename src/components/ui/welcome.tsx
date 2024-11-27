"use client";

import React, { useState } from 'react';

const Welcome = () => {
  const [theme, setTheme] = useState('christmas');

  const handleCreateCalendar = () => {
    // Logic to create a new calendar
    console.log(`Creating a calendar with theme: ${theme}`);
  };

  return (
    <div className="welcome-page flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Create Your Advent Calendar</h1>
      <div className="mb-4">
        <label htmlFor="theme" className="block text-lg font-medium mb-2">
          Select a Theme:
        </label>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="christmas">Christmas</option>
          {/* Add more themes here */}
        </select>
      </div>
      <button
        onClick={handleCreateCalendar}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Create Calendar
      </button>
    </div>
  );
} 

export {Welcome}