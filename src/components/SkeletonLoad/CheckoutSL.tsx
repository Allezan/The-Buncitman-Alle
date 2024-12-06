import React from "react";

const CheckoutSL: React.FC = () => {
  return (
    <div className="flex flex-col my-10 px-4 sm:px-10 animate-pulse">
      {/* Address Section Skeleton */}
      <div className="bg-gray-300 rounded-lg h-32 mb-5"></div>

      {/* Main Content Skeleton */}
      <section className="flex flex-col lg:flex-row gap-5">
        {/* Product List Skeleton */}
        <div className="lg:w-3/4 bg-white border border-neutral-100 rounded-lg shadow-sm p-5">
          <div className="h-6 bg-gray-300 rounded-md mb-4 w-1/3"></div>
          <div className="space-y-3 overflow-y-auto h-96">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border-b pb-3 last:border-none"
              >
                <div className="h-16 w-16 bg-gray-300 rounded-md"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded-md w-3/5 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded-md w-1/6"></div>
                <div className="h-4 bg-gray-300 rounded-md w-1/6"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section Skeleton */}
        <div className="lg:w-1/3 bg-white border border-neutral-100 rounded-lg shadow-sm p-5">
          <div className="h-6 bg-gray-300 rounded-md mb-4 w-1/3 mx-auto"></div>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded-md w-3/5"></div>
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-300 rounded-md my-4"></div>
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
                <div className="h-4 bg-gray-300 rounded-md w-1/6"></div>
              </div>
            ))}
          </div>
          <div className="h-10 bg-blue-300 rounded-md mt-5"></div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutSL;
