export interface Motorcycle {
  name: string;
  type: {
    name: string;
    uuid: string;
  };
  uid: null | string;
  seller: {
    name: string;
    uuid: string;
    metadata: null | any;
  };
  slug: string;
  metadata: null | any;
  uuid: string;
  brand: {
    name: string;
    uuid: string;
  };
  used: boolean;
  featured: boolean;
  favourite: boolean;
  links: any[];
  seo: null | any;
  images: Image[];
  categories: Category[];
  accessories: any[];
  services: any[];
  similar_to: any[];
  tags: any[];
  variants: Variant[];
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
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path: null | string;
      size: number;
      width: number;
      height: number;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | any;
  data: {
    view_type: string;
  };
  type: string;
  uuid: null | string;
}

export interface Category {
  name: string;
  locale: string;
  uuid: string;
}

export interface Variant {
  name: string;
  slug: null | string;
  uid: null | string;
  externalId: string;
  uuid: string;
  used: null | boolean;
  featured: boolean;
  favourite: boolean;
  main: boolean;
  metadata: null | any;
  links: any[];
  seo: null | any;
  images: Image[];
  prices: Price[];
  details: {
    years: Detail[];
    motors: Detail[];
    features: Detail[];
    fuel_types: Detail[];
    doors: Detail[];
    transmissions: Detail[];
    body_types: Detail[];
    testdrive: Detail[];
    kilometers: Detail[];
    description: Detail[];
  };
  tags: any[];
  stock: number;
}

interface Price {
  amount: number;
  currency: string;
  purpose: string;
  uuid: string;
}

interface Detail {
  value: string;
  description: null | string;
  extra: null | any;
}
