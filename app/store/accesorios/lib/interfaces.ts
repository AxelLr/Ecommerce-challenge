export interface Accessory {
  name: string;
  type: {
    name: string;
    uuid: string;
  };
  uid: string | null;
  seller: Seller;
  slug: string;
  metadata: any;
  uuid: string;
  brand: Brand;
  used: boolean;
  featured: boolean;
  favourite: boolean;
  links: any[];
  seo: any;
  images: Image[];
  categories: Category[];
  accessories: any[];
  services: any[];
  similar_to: any[];
  tags: any[];
  variants: Variant[];
}

interface Seller {
  name: string;
  uuid: string;
  metadata: any;
}

interface Brand {
  name: string;
  uuid: string;
}

interface Category {
  name: string;
  locale: string;
  uuid: string;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  data: {
    view_type: string;
  };
  type: string;
  uuid: string | null;
}

interface Price {
  amount: number;
  currency: string;
  purpose: string;
  uuid: string;
}

interface Detail {
  value: string;
  description: string | null;
  extra: any;
}

interface Variant {
  name: string;
  slug: string | null;
  uid: string | null;
  externalId: string;
  uuid: string;
  used: boolean | null;
  featured: boolean;
  favourite: boolean;
  main: boolean;
  metadata: any;
  links: any[];
  seo: any;
  images: Image[];
  prices: Price[];
  details: {
    years: Detail[];
    body_types: Detail[];
    fuel_types: Detail[];
    doors: Detail[];
    features: Detail[];
    transmissions: Detail[];
    motors: Detail[];
    testdrive: Detail[];
    description: Detail[];
    kilometers: Detail[];
  };
  tags: any[];
  stock: number;
}
