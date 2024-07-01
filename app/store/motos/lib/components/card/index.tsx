import React from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/lib/components/text";
import { LocationIcon } from "@/public/assets/icons";
import { formatAmount } from "@/lib/utils/helpers";
import { Motorcycle } from "../../interfaces";
import { parseMotorcycle } from "../../helpers";
import CardSpecifications from "./CardSpecifications";

interface ItemProps {
  motorcycle: Motorcycle;
}

const MotorcycleCard: React.FC<ItemProps> = ({ motorcycle }) => {
  const { price, name, thumbnail, sellerName, variants } =
    parseMotorcycle(motorcycle);

  const formattedAmountARS = formatAmount(price);

  return (
    <article className="border border-light rounded p-4">
      <Link
        className="h-full flex flex-col"
        href={`/store/motos/${motorcycle.uuid}`}
        aria-label={`Ver detalles de ${motorcycle.name}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Image
            src={thumbnail.url}
            alt={thumbnail.name}
            className="h-[138px]"
            width={thumbnail.width}
            height={thumbnail.height}
          />

          <Text
            className="border border-light text-slate rounded-xl py-1 px-3"
            type="span"
          >
            {variants[0].name}
          </Text>

          <Text type="h5">{name}</Text>
          <div className="flex flex-col items-center mt-auto">
            <Text className="text-slate" type="h6">
              <Text className="text-[0.625rem]" type="span">
                ARS{" "}
              </Text>
              ${formattedAmountARS}
            </Text>
            <Text
              type="span"
              className="flex flex-row items-center uppercase leading-3 text-[0.625rem] text-slate mb-2"
            >
              <Image alt="concesionaria" src={LocationIcon} className="mr-1 " />
              {sellerName}
            </Text>
            <CardSpecifications motorcycle={motorcycle} />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default MotorcycleCard;
