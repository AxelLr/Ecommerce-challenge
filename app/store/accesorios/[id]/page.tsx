import { notFound } from "next/navigation";
import { getAccessoryById } from "../lib/services";
import Carousel from "@/lib/components/carousel";
import Breadcrumbs from "@/lib/components/breadcrumbs";
import Text from "@/lib/components/text";
import { parseAccessory } from "../lib/helpers";
import AmountAdjuster from "../lib/components/AmountAdjuster";
import { formatAmount } from "@/lib/utils/helpers";
import Image from "next/image";

export default async function AccessoryDetails({
  params,
}: {
  params: { id: string };
}) {
  const accessory = await getAccessoryById(params.id);

  if (!accessory) {
    notFound();
  }

  const { variantImages, name, price, features, currency } =
    parseAccessory(accessory);

  return (
    <main className="pt-8 pb-40">
      <section className="grid md:gap-10 md:justify-center md:grid-cols-2">
        <div className="w-[100vw] overflow-hidden md:w-full flex flex-col lg:justify-self-end lg:w-[30rem] lg:self-start">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/" },
              {
                label: "Accesorios",
                href: `/store/accesorios`,
              },
              {
                label: accessory.name,
                href: `/store/accesorios/${accessory.uuid}`,
                active: true,
              },
            ]}
            className="pl-4"
          />
          {variantImages.length > 1 ? (
            <Carousel images={variantImages} />
          ) : (
            <Image
              className="mt-4 self-center"
              src={variantImages[0].url}
              alt={variantImages[0].name}
              width={variantImages[0].width}
              height={variantImages[0].height}
            />
          )}
        </div>

        <div className="flex flex-col items-center px-4 mt-12 md:items-start md:px-0 md:mt-0 md:pt-4 md:pr-4 lg:pt-5 lg:w-[28rem]">
          <Text type="h4">{name}</Text>
          <Text type="h5">{currency + " " + formatAmount(price)}</Text>
          <Text className="text-center md:text-start my-6" type="p">
            {features}
          </Text>
          <Text className="text-start" type="h6">
            Cantidad:
          </Text>
          <AmountAdjuster />
        </div>
      </section>
    </main>
  );
}
