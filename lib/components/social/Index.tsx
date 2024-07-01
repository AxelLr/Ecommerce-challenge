import Image from "next/image";
import { socialLinks } from "../layout/header/constants";

export const SocialLinks = () => {
  return (
    <ul className="flex flex-row items-center w-36 justify-between">
      {socialLinks.map((link) => (
        <li className="mb-3" key={link.url}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://${link.url}`}
          >
            <Image src={link.icon} alt={`${link.url}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};
