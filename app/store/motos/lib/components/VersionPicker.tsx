"use client";
import React from "react";
import Text from "@/lib/components/text";
import clsx from "clsx";
import { useSearchParams, useRouter } from "next/navigation";
import { ParsedMotorcycle } from "../helpers";

const VersionPicker = ({
  motorcycle,
  selected,
}: {
  motorcycle: ParsedMotorcycle;
  selected: boolean;
}) => {
  const { name, price, variantId, details } = motorcycle;

  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleOptionClick = () => {
    const params = new URLSearchParams(searchParams);

    params.set("variant", variantId);
    replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <li>
      <button
        onClick={handleOptionClick}
        className={clsx(
          `border-2 border-light rounded-lg p-3 flex justify-between items-center cursor-pointer w-full`,
          selected && "border-primary"
        )}
      >
        <div className="flex flex-col ">
          <Text className="text-start" type="h5">
            {name}
          </Text>
          <Text className="text-lightGray text-start" type="p">
            Motor: {details.motor}
          </Text>
          <Text className="text-lightGray text-start" type="p">
            {details.potency}
          </Text>
        </div>

        <Text type="h5" className="text-h5 font-bold">
          ${price}
        </Text>
      </button>
    </li>
  );
};

export default VersionPicker;
