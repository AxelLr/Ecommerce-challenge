import clsx from "clsx";
import React from "react";
import { CategoryIcon, EngineIcon, ModelIcon } from "@/public/assets/icons";
import { Motorcycle } from "../interfaces";
import { parseMotorcycle } from "../helpers";
import Image from "next/image";
import Text from "@/lib/components/text";

const CardSpecifications = ({ motorcycle }: { motorcycle: Motorcycle }) => {
  const { details, category } = parseMotorcycle(motorcycle);

  const itemSpecifications = [
    {
      title: "Motor",
      value: details.motor,
      icon: EngineIcon,
    },
    {
      title: "Categoría",
      value: category.name,
      icon: CategoryIcon,
    },
    {
      title: "Altura",
      value: details.height + "cm",
      icon: ModelIcon,
    },
  ];

  return (
    <div className="flex flex-row justify-center mt-auto">
      {itemSpecifications.map(({ title, icon, value }, index) => {
        const lastItem = index === itemSpecifications.length - 1;
        return (
          <div
            key={title}
            className={clsx(
              "flex flex-col items-center justify-evenly border border-light py-2 px-4",
              index === 0
                ? "rounded-l-md border-r-0"
                : lastItem
                ? "rounded-r-md border-l-0"
                : ""
            )}
          >
            <Image src={icon} alt={title} />
            <div className="flex flex-col mt-auto">
              <Text type="span" className="text-lightGray">
                {title}
              </Text>
              <Text className="text-slate" type="span">
                {value}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSpecifications;
