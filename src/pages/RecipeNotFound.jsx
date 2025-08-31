
import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center pt-16">
      <div className="text-center px-6 py-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recipe Not Found</h2>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, we couldn't find any recipes matching your search. Please try again with a different term.
        </p>
        
      </div>  
    </div>
  );
};

export default NotFound;
