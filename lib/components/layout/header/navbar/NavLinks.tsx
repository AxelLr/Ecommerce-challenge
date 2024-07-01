import React from "react";
import { appLinks } from "../constants";
import clsx from "clsx";
// Next
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
      {appLinks.map((name) => {
        const isCurrentPage = pathname.includes(name);

        return (
          <li className="mb-3 w-full md:mb-0" key={name}>
            <Link
              className={clsx("block", isCurrentPage && "text-primary")}
              href={`/store/${name}`}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
