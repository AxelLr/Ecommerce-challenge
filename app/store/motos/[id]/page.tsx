import { notFound } from "next/navigation";
import { getMotorcycleById } from "../lib/services";
import Carousel from "@/lib/components/carousel";
import Text from "@/lib/components/text";
import Breadcrumbs from "@/lib/components/breadcrumbs";
import { getAccessoriesCotization, parseMotorcycle } from "../lib/helpers";
import { formatAmount } from "@/lib/utils/helpers";
import Separator from "@/lib/components/Separator";
import VersionPicker from "../lib/components/VersionPicker";
import Link from "next/link";
import { Suspense } from "react";
import AccesoriesList from "../lib/components/AccesoriesList";
import getAccessories from "../../accesorios/lib/services";

export default async function MotorcycleDetails({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { variant: string; accesorios: string };
}) {
  const urlVariantId = searchParams.variant;

  const [motorcycle, accessories] = await Promise.all([
    getMotorcycleById(params.id),
    getAccessories(),
  ]);

  if (!motorcycle) {
    notFound();
  }

  const parsedMotorcycle = parseMotorcycle(motorcycle, urlVariantId);

  const {
    name,
    uuid,
    price,
    quotePrice,
    variants,
    variantImages,
    details,
    variantId,
  } = parsedMotorcycle;

  const finalPrice =
    price + getAccessoriesCotization(searchParams, accessories);

  return (
    <main className="pt-8 pb-40">
      <section className="grid md:gap-4 md:items-center md:justify-center md:grid-cols-2">
        <div className="w-[100vw] overflow-hidden md:w-full lg:justify-self-end lg:w-[30rem] lg:self-start">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/" },
              {
                label: "Motos",
                href: `/store/motos`,
              },
              {
                label: name,
                href: `/store/motos/${uuid}`,
                active: true,
              },
            ]}
            className="pl-4"
          />
          <Carousel images={variantImages} />

          <Text className="mt-6" type="h5">
            {name}
          </Text>
          <Text className="text-slate" type="p">
            Motor: {details.motor} <br />
            {details.potency}
          </Text>
        </div>

        <div className="flex flex-col items-start px-4 mt-12 md:mt-0 lg:w-[32rem] lg:pt-5">
          <Text className="mb-6 " type="h4">
            {name}
          </Text>
          <Text className="text-slate" type="h5">
            ${formatAmount(price)}
          </Text>
          <Text>o</Text>
          <Text className="text-slate" type="h5">
            ${formatAmount(quotePrice)} Mensual por 24 meses
          </Text>
          <Separator />
          <Text className="mb-4" type="h5">
            Elegí tu version
          </Text>
          <ul className="w-full">
            {variants.map((variant) => {
              return (
                <VersionPicker
                  selected={variant.uuid === variantId}
                  motorcycle={parsedMotorcycle}
                  key={variant.uuid}
                />
              );
            })}
          </ul>
          <Separator />

          <Suspense>
            <AccesoriesList />
          </Suspense>
          <div className="flex flex-row justify-between items-center w-full">
            <Text className="text-black" type="h6">
              Precio final:
            </Text>
            <Text type="h5">ARS {formatAmount(finalPrice)}</Text>
          </div>

          <Separator />

          <Link
            href={`${
              params.id
            }/reserva?variant=${variantId}&${new URLSearchParams(
              searchParams
            )}`}
            className="bg-primary text-white p-4 rounded-lg w-full disabled:opacity-50 text-center mt-4"
          >
            Siguiente
          </Link>
        </div>
      </section>
    </main>
  );
}
