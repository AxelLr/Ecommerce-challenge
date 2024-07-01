import getAccessories from "@/app/store/accesorios/lib/services";
import Separator from "@/lib/components/Separator";
import Text from "@/lib/components/text";
import React from "react";
import AccesssoryItem from "./AcessoryItem";

export default async function AccesoriesList() {
  const accessories = await getAccessories();

  return (
    <>
      <Text className="mb-4" type="h5">
        Agregá accesorios
      </Text>
      <div className="flex flex-col gap-2 w-full">
        {accessories.map((acry) => (
          <AccesssoryItem key={acry.uuid} accessory={acry} />
        ))}
      </div>
      <Separator />
    </>
  );
}
