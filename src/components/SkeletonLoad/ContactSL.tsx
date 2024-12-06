import React from "react";

const ContactSL: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-12">
      {/* Hero Section Skeleton */}
      <div className="flex flex-wrap justify-between items-center w-full max-w-7xl px-4 sm:px-8">
        {/* Text Skeleton */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="h-12 w-3/4 bg-gray-300 rounded-md"></div>
          <div className="h-12 w-5/6 bg-gray-300 rounded-md"></div>
          <div className="h-12 w-2/3 bg-gray-300 rounded-md"></div>
          <div className="h-12 w-3/4 bg-gray-300 rounded-md"></div>
          <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
          <div className="h-6 w-2/3 bg-gray-300 rounded-md"></div>
        </div>

        {/* Image Skeleton */}
        <div className="w-full md:w-1/2 h-80 bg-gray-300 rounded-lg"></div>
      </div>

      {/* "Get in Touch" Section Skeleton */}
      <div className="w-full max-w-7xl px-4 sm:px-8 space-y-8">
        {/* Headings Skeleton */}
        <div className="text-center space-y-4">
          <div className="h-6 w-1/4 bg-gray-300 rounded-md mx-auto"></div>
          <div className="h-8 w-1/3 bg-gray-300 rounded-md mx-auto"></div>
          <div className="h-6 w-1/4 bg-gray-300 rounded-md mx-auto"></div>
        </div>

        {/* Contact Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md animate-pulse"
            >
              <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
              <div className="h-5 w-2/3 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSL;
