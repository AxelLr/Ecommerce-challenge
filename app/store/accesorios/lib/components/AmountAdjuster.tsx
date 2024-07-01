"use client";
import React from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Text from "@/lib/components/text";

const AmountAdjuster = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace, push } = useRouter();

  const quantity = Number(searchParams.get("cantidad")) || 0;

  const handleAmountAdjusterButton = (action: "increment" | "decrement") => {
    const params = new URLSearchParams(searchParams);

    const newValue = action === "increment" ? quantity + 1 : quantity - 1;

    params.set("cantidad", String(newValue));
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleBuyButton = () => {
    const params = new URLSearchParams(searchParams);
    params.set("cantidad", String(quantity));
    push(`${pathname}/recibo?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <div className="flex row justify-center md:justify-start h-12">
        <button
          className="border border-primary rounded-l-md border-r-0 px-8"
          disabled={quantity === 0}
          onClick={() => handleAmountAdjusterButton("decrement")}
        >
          -
        </button>
        <div className="border border-primary px-8 flex items-center w-[75px]">
          <Text>{quantity}</Text>
        </div>

        <button
          className="border border-primary rounded-r-md border-l-0 px-8"
          onClick={() => handleAmountAdjusterButton("increment")}
        >
          +
        </button>
      </div>
      <hr className="border border-light h-[1px] w-full my-8" />

      <button
        disabled={quantity === 0}
        className="bg-primary text-white p-4 rounded-lg w-full disabled:opacity-50"
        onClick={handleBuyButton}
      >
        Comprar
      </button>
    </div>
  );
};

export default AmountAdjuster;
