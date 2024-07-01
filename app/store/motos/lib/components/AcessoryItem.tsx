"use client";
import { parseAccessory } from "@/app/store/accesorios/lib/helpers";
import { Accessory } from "@/app/store/accesorios/lib/interfaces";
import Text from "@/lib/components/text";
import { formatAmount } from "@/lib/utils/helpers";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

const AccesssoryItem = ({ accessory }: { accessory: Accessory }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const { price, uuid } = parseAccessory(accessory);

  const accessoriesParam = searchParams.get("accesorios");

  const accessoriesList = accessoriesParam?.split(",") || [];

  const currentAccessoryQuantity =
    accessoriesList?.filter((e) => e === uuid).length || 0;

  const handleAmountAdjusterButton = (action: "increment" | "decrement") => {
    const params = new URLSearchParams(searchParams);

    const newValue = [...accessoriesList];

    if (action === "increment") {
      newValue.push(uuid);
    }

    if (action === "decrement") {
      const index = newValue.indexOf(uuid);

      if (index !== -1) {
        newValue.splice(index, 1);
      }
    }
    if (newValue.length === 0) {
      replace(`${pathname}`, { scroll: false });
    } else {
      params.set("accesorios", String(newValue.join(",")));

      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  };

  return (
    <div className="mt-auto flex flex-row justify-between items-center w-full">
      <Text
        className="text-black text-sm whitespace-nowrap overflow-hidden text-ellipsis"
        type="p"
      >
        {accessory.name}
      </Text>
      <div className="flex flex-row">
        <Text type="p" className="mr-4 text-black text-sm pt-1">
          {"ARS " + formatAmount(price)}
          {currentAccessoryQuantity ? " x" + currentAccessoryQuantity : ""}
        </Text>
        <div>
          <button
            className="mr-3 text-black text-sm"
            onClick={() => handleAmountAdjusterButton("increment")}
          >
            +
          </button>
          <button
            className="text-black text-sm"
            disabled={currentAccessoryQuantity === 0}
            onClick={() => handleAmountAdjusterButton("decrement")}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccesssoryItem;
