import React from "react";
import Text from "@/lib/components/text";
import { LightAppLogo } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="grid grid-cols-1 p-10 bg-footer-bg mt-auto md:grid-auto-rows-auto md:gap-8">
      <div className="flex justify-center md:justify-start">
        <Image
          alt="SimpliMuv"
          src={LightAppLogo}
          width={145}
          height={30}
          className="mb-6 md:mb-0 h-[30px]"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly">
        <ul>
          <li className="mb-2">
            <Link href="/">
              <Text type="h6" className="text-white">
                Home
              </Text>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/store/motos">
              <Text type="h6" className="text-white">
                Motos
              </Text>
            </Link>
          </li>
          <li className="mb-8">
            <Link href="/store/accesorios">
              <Text type="h6" className="text-white">
                Accesorios
              </Text>
            </Link>
          </li>
        </ul>
        <div className="mb-4 flex flex-col items-center">
          <Text type="h6" className="text-white mb-2">
            Dirección
          </Text>
          <Text type="span" className="leading-6 text-lightText text-base">
            Av. Del Libertador 3304, Vicente López, 1637, Argentina <br />
            info@revicentelopez.com <br />
            11 3221 9220
          </Text>
        </div>
      </div>

      <div className="flex flex-col text-center mt-8 md:mt-0 md:flex-row md:justify-between md:items-center">
        <Text type="span" className="text-white text-center">
          Defensa del consumidor | Términos y condiciones{" "}
          <br className="md:hidden" />
          Politica de privacidad | Sitemap
        </Text>

        <Text type="span" className="mt-2 text-lightGray text-center ">
          © 2023 SimpliMuv
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
