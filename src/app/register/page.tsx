"use client";
// import { register } from "@/lib/User";
import FormRegister from "@/components/form/FormRegister";
import React, { useEffect, useState } from "react";
import RegisterSL from "@/components/SkeletonLoad/RegisterSL";

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);
  
  return isLoading ? (
    <RegisterSL />
  ) : (
    <>
      {/* <section>
        <div className="h-[343] bg-black w-full" />
      </section> */}
      <section className="flex flex-col gap-5 items-center justify-center my-10">
        <h1 className="text-Heading-1 tet-red-500 font-bold">Register</h1>
        <div className="w-96">
          <FormRegister />
        </div>
      </section>
    </>
  );
};

export default Page;
