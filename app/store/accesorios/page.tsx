import React from "react";
import getAccessories from "./lib/services";
import AccessoryCard from "./lib/components/Card";

export default async function Accessories() {
  const accessories = await getAccessories();

  return (
    <main className="shop-grid py-7">
      {accessories.map((accessory) => (
        <AccessoryCard key={accessory.uid} accessory={accessory} />
      ))}
    </main>
  );
}
