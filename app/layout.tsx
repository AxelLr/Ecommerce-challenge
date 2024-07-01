import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import Navbar from "@/lib/components/layout/header/navbar";
import Link from "next/link";
import Image from "next/image";
import { AppLogo } from "@/public/assets/icons";
import Footer from "@/lib/components/layout/footer/Index";

const sanFrancisco = localFont({
  src: [
    {
      path: "../public/assets/fonts/sf-ui-display-black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/sf-ui-display-bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/sf-ui-display-heavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/sf-ui-display-light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/sf-ui-display-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/sf-ui-display-semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/sf-ui-display-thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/sf-ui-display-ultralight.woff",
      weight: "200",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "SimpliMuv",
  description: "Tienda de vehículos y accesorios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sanFrancisco.className} flex flex-col min-h-screen`}>
        <header className="p-4 flex items-center justify-between h-16">
          <Link href="/">
            <Image src={AppLogo} alt="SimpliMuv" />
          </Link>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
