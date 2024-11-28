// import AddToCart from "@/components/Form/AddToCart";
import { getProductDetails } from "@/lib/Product";
import { formatPrice } from "@/utils/formatPrice";
import { random } from "@/utils/randomStars";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

interface Props {
    params: {
        name : string
    }
}


const page = async ({ params: { name } }:Props) => {
  const details = await getProductDetails(name);

  return (
    <section className="grid grid-cols-2 p-20 gap-10">
      <div className="flex justify-center">
        <Image
          src={details.imageUrl}
          alt="product"
          width={248}
          height={248}
          className="w-[475px] h-[475px]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h1 className="text-Heading-2 text-blue-800 font-semibold">
            {details.name}
          </h1>
          <div className="flex flex-row gap-3  items-center">
            <div className="px-3 border-r-2 border-black">
              <h3 className="text-Heading-3 text-blue-500 font-bold">
                {formatPrice(details.price)}
              </h3>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                {Array(random(5))
                  .fill(2)
                  .map((_, index) => (
                    <FaStar size={20} key={index} />
                  ))}
              </div>
              <div className="flex flex-row gap-2">
                <p>
                  ({random(5)})•{random(50)} reviews
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-Heading-3 text-blue-500 font-semibold">
              Details
            </h4>
            <p className="text-Heading-4 text-red-800">{details.description}</p>
          </div>
        </div>
        {/* <AddToCart /> */}
      </div>
    </section>
  );
};

export default page;