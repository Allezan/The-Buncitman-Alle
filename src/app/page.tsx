"use client";

import React, { useEffect, useState } from "react";
import Team from "@/components/Card/Team";
import Testimonial from "@/components/Card/Testimonial";
import { team } from "@/data/team";
import { Testimoni } from "@/data/testimonial";
import Image from "next/image";
import Link from "next/link";
import { RxCaretRight } from "react-icons/rx";
import HomeSL from "@/components/SkeletonLoad/HomeSL";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);
  
  return isLoading ? (
    <HomeSL />
  ) : (
    <>
      <section className="bg-hero-image bg-cover bg-center h-screen flex">
        <div className="flex flex-col text-white w-[40rem] h-full justify-center mx-24 gap-5">
          <h1 className="text-Heading-1 font-bold">The Buncitmen</h1>
          <p className="text-Heading-3 font-semibold">
            The Buncitmen adalah warung kopi yang mengusung konsep modern namun
            masih mempertahankan kesan warung kopi pada umumnya. Warung kopi ini
            menyediakan biji perkopian dan minuman dalam kemasan botol,
            menjadikannya pilihan menarik bagi para penikmat kopi
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-5 m-20">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col">
            <h1 className="text-Heading-2 font-bold">
              Discover Our Premium Coffee Bean Selection
            </h1>
            <p className="text-Heading-4 font-normal">
              Experience the rich flavors of our carefully sourced coffee beans.
              Each variety is crafted to elevate your coffee experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-Heading-3 font-semibold">Biji Kopi</h2>
              <p className="text-Heading-4 font-normal text-justify">
                Biji kopi yang The Buncitmen tawarkan memiliki kualitas dan
                kenikmatan yang tidak bisa diragukan, sehingga menghasilkan cita
                rasa yang sesuai dengan selera
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-Heading-3 font-semibold">Produk Kopi</h2>
              <p className="text-Heading-4 font-normal">
                Produk kopi yang kami tawarkan dikemas menjadi minuman botol
                agar lebih praktis dan lebih mudah untuk dinikmati kapanpun
                dimanapun, serta pilihan rasa yang beragam.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-10 items-center">
            <Link href="/shop" className="text-Heading-5">
              Shop
            </Link>
            <Link
              href="/shop"
              className="flex flex-row justify-center items-center text-Heading-5"
            >
              <h1>Details</h1>
              <div>
                <RxCaretRight size={30} />
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/CoffeImage.jpg"
            alt="Biji kopi"
            width={800}
            height={800}
          />
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-Heading-2 font-bold">Customer Testimonials</h1>
          <p className="text-Heading-4 font bold">
            Our Customers love our coffe and service!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-20">
            {Testimoni.map((item) => (
              <Testimonial
                key={item.id}
                name={item.name}
                deskripsi={item.deskripsi}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 m-20">
        <div className="flex flex-col gap-5 items-center">
          <h3 className="font-bold text-Heading-4">Meet</h3>
          <h1 className="font-bold text-Heading-2">Our Team</h1>
          <p>Dedicated professionals passionate about coffe and community</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-20">
            {team.map((item) => (
              <Team
                key={item.id}
                name={item.name}
                position={item.position}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 mt-5">
          <h1 className="text-Heading-2 font-bold ">We&apos;re hiring!</h1>
          <p className="text-Heading-4 font-semibold">
            Join our team and share your passion for coffee
          </p>
          <button className="rounded-md p-2 border-black border-2 text-Heading-4 hover:text-white hover:bg-neutral-950">
            Open Positions
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
