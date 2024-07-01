"use client";
import React from "react";
import Link from "next/link";
import { CartIcon } from "@/public/assets/icons";
import NavLinks from "./NavLinks";
import Menu from "./Menu";

export default function Navbar() {
  const cartLink = (
    <Link className="hidden md:block" href="/">
      <CartIcon className="text-primary" />
    </Link>
  );

  return (
    <>
      <nav className="hidden md:block">
        <NavLinks />
      </nav>
      {cartLink}
      <Menu />
    </>
  );
}
