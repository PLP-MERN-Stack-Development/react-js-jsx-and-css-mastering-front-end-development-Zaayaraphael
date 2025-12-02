import React from 'react';
import APIDisplay from '../components/APIDisplay';

/**
 * API page component
 */
const API = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          API Data
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Browse posts fetched from JSONPlaceholder API with search functionality.
        </p>
      </div>
      <APIDisplay />
    </div>
  );
};

export default API;
