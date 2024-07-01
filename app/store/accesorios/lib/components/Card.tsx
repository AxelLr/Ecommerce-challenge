import Link from "next/link";
import React from "react";
import { Accessory as IAccessory } from "../interfaces";
import Image from "next/image";
import Text from "@/lib/components/text";
import { parseAccessory } from "../helpers";
import { formatAmount } from "@/lib/utils/helpers";

interface ItemProps {
  accessory: IAccessory;
}

const AccessoryCard: React.FC<ItemProps> = ({ accessory }) => {
  const { price, thumbnail } = parseAccessory(accessory);

  const fullPrice = formatAmount(price + Number(price) * 0.2);

  return (
    <article className="border border-light rounded p-4">
      <Link
        className="h-full flex flex-col items-center"
        href={`/store/accesorios/${accessory.uuid}`}
        aria-label={`Ver detalles de ${accessory.name}`}
      >
        <Image
          src={thumbnail.url}
          alt={thumbnail.name}
          width={thumbnail.width}
          height={thumbnail.height}
          className="mb-2"
        />
        <div className="mt-auto">
          <Text type="h5">{accessory.name}</Text>
          <Text className="text-center text-slate" type="h6">
            ${formatAmount(price)}
            <Text
              type="span"
              className="line-through text-lightGray ml-1.5 text-center"
            >
              ${fullPrice}
            </Text>
          </Text>
        </div>
      </Link>
    </article>
  );
};
export default AccessoryCard;
