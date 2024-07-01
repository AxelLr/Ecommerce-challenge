import { Motorcycle, Image, ImageFormat, Category } from "./interfaces";
import { Accessory } from "../../accesorios/lib/interfaces";
import { parseAccessory } from "../../accesorios/lib/helpers";

export interface ParsedMotorcycle extends Motorcycle {
  sellerName: string;
  price: number;
  currency: string;
  image: string;
  variantId: string;
  features: string | null;
  quotePrice: number;
  variantImages: Image[];
  details: { motor: string; height: number; potency: string | undefined };
  thumbnail: ImageFormat;
  category: Category;
}
export const parseMotorcycle = (
  motorcycle: Motorcycle,
  currentVariant?: string
): ParsedMotorcycle => {
  const variant =
    motorcycle.variants.find((variant) => variant.uuid === currentVariant) ||
    motorcycle.variants[0];
  const price = variant.prices[0];
  const image = variant.images[0];

  return {
    ...motorcycle,
    sellerName: motorcycle.seller.name,
    price: price.amount,
    currency: price.currency,
    image: image.url,
    variantId: variant.uuid,
    features:
      variant.details.features.find(
        (feature) =>
          feature.value && feature.value !== "n/a" && feature.value !== "false"
      )?.value || null,
    quotePrice: Math.round(motorcycle.variants[0].prices[0].amount / 24) * 1.25,
    variantImages: variant.images,
    details: {
      motor: variant.details.motors[0].value,
      potency: variant.details.features.find((feature) =>
        feature.value.toLocaleLowerCase().includes("potencia")
      )?.value,
      height: 60,
    },
    thumbnail: variant.images[0]?.formats.thumbnail,
    category: motorcycle.categories[0],
  };
};

export const getAccessoriesCotization = (
  searchParams: { accesorios: string },
  accessories: Accessory[]
): number => {
  const accessoriesParam = searchParams.accesorios?.split(",") || [];

  const accessoriesAmount = accessoriesParam.reduce(
    (acc: Record<string, number>, id: string) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    },
    {}
  );

  const totalAmount = accessories.reduce(
    (acc: number, accessory: Accessory) => {
      const { uuid, price } = parseAccessory(accessory);
      if (accessoriesAmount[uuid]) {
        acc += accessoriesAmount[uuid] * price;
      }
      return acc;
    },
    0
  );

  return Number(totalAmount);
};
