"use client";
import React, { useState } from "react";
import { BurgerMenuIcon, CartIcon, CloseMenuIcon } from "@/public/assets/icons";
import NavLinks from "./NavLinks";
// Next
import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/lib/components/social/Index";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const buttonIcon = isOpen ? CloseMenuIcon : BurgerMenuIcon;

  return (
    <div className="md:hidden z-10">
      <button type="button" onClick={toggleMenu}>
        <Image src={buttonIcon} alt="menu" />
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-white flex flex-col items-center pt-8 absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden shadow-lg h-full`}
      >
        <button onClick={closeMenu}>
          <NavLinks />
        </button>
        <Link className="flex flex-row items-center mt-16 mb-32" href="/">
          <CartIcon color="#180A2A" />
          Carrito
        </Link>
        <SocialLinks />
      </div>
    </div>
  );
}
