"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Contact from "@/components/Card/Contact";
import ContactSL from "@/components/SkeletonLoad/ContactSL";

const contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const arrayContact = [
    {
      id: 1,
      logo: <MdOutlineEmail size={45} />,
      description: "Reach us anytime for inquiries or feedback.",
      contact: "info@buncitmen.com",
    },
    {
      id: 2,
      logo: <IoCallOutline size={45} />,
      description: "Reach us anytime for inquiries or feedback.",
      contact: "info@buncitmen.com",
    },
    {
      id: 3,
      logo: <HiOutlineLocationMarker size={45} />,
      description: "Reach us anytime for inquiries or feedback.",
      contact: "info@buncitmen.com",
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <ContactSL />
  ) : (
    <>
      <section className="grid grid-cols-2 gap-5">
        <div className="flex flex-col justify-center p-10">
          <h1 className="text-Heading-1 font-bold">
            Discover The Buncitmen: Your Destination for Premium Coffee
            Experiences
          </h1>
          <p className="text-Heading-3 mt-6 font-normal">
            At The Buncitmen, we are passionate about delivering the finest
            coffee products. Our carefully sourced coffee beans and expertly
            crafted coffee bottles ensure every sip is a delightful experience.
          </p>
        </div>
        <div>
          <Image
            src="/The Buncitmen Logo.png"
            alt="Logo"
            width={850}
            height={850}
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center">
          <h3 className="text-Heading-4 font-semibold">Connect</h3>
          <h1 className="text-Heading-2 font-bold">Get in Touch</h1>
          <h3 className="text-Heading-4 font-semibold">
            We&apos;d love to hear from you!
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {arrayContact.map((items) => (
            <Contact
              key={items.id}
              Logo={items.logo}
              description={items.description}
              contactInfo={items.contact}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default contact;
