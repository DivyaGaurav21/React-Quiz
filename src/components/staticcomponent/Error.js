import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg">
        <span role="img" aria-label="Error Icon" className="text-3xl">💥</span>
        <p className="text-xl font-semibold mt-2">There was an error fetching questions.</p>
      </div>
    </div>
  );
}

export default Error;
