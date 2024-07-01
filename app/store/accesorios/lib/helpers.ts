import { Accessory, Image, ImageFormat } from "./interfaces";

interface ParsedAccessory extends Accessory {
  sellerName: string;
  price: number;
  currency: string;
  image: string;
  variantId: string;
  features: string | null;
  thumbnail: ImageFormat;
  variantImages: Image[];
}
export const parseAccessory = (accessory: Accessory): ParsedAccessory => {
  const variant = accessory.variants[0];
  const price = variant.prices[0];
  const image = variant.images[0];

  return {
    ...accessory,
    sellerName: accessory.seller.name,
    price: price.amount,
    currency: price.currency,
    image: image.url,
    variantId: variant.uuid,
    features:
      variant.details.features.find(
        (feature) =>
          feature.value && feature.value !== "n/a" && feature.value !== "false"
      )?.value || null,
    thumbnail: variant.images[0]?.formats.thumbnail,
    variantImages: variant.images,
  };
};
