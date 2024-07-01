import React from "react";
import { getMotorcycles } from "./lib/services";
import MotorcycleCard from "./lib/components/Card";

export default async function Motorcycles() {
  const motorcycles = await getMotorcycles();

  return (
    <main className="shop-grid py-7">
      {motorcycles.map((motorcycle) => (
        <MotorcycleCard key={motorcycle.uuid} motorcycle={motorcycle} />
      ))}
    </main>
  );
}
