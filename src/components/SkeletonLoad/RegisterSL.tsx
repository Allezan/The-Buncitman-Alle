import React from "react";

const RegisterSL: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="animate-pulse w-full max-w-md space-y-6 px-4 sm:px-8">
        {/* Form Title Skeleton */}
        <div className="h-16 w-2/3 bg-gray-300 rounded-md mx-auto"></div>

        {/* Form Fields Skeleton */}
        <div className="space-y-4 mb-3">
          <div>
            <div className="h-5 w-1/4 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-8 w-full bg-gray-300 rounded-md"></div>
          </div>
          <div>
            <div className="h-5 w-1/6 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-8 w-full bg-gray-300 rounded-md"></div>
          </div>
          <div>
            <div className="h-5 w-1/4 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-8 w-full bg-gray-300 rounded-md"></div>
          </div>
          <div>
            <div className="h-5 w-1/3 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-8 w-full bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="h-8 w-full bg-gray-300 rounded-md"></div>

        {/* Additional Content Skeleton */}
        <div className="space-y-2 mt-1 text-center">
          <div className="h-4 w-3/4 bg-gray-300 rounded-md mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSL;
