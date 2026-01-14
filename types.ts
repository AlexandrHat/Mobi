
export type Language = 'ru' | 'en' | 'de';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  shortSpecs: {
    display: string;
    ram: string;
    storage: string;
    battery: string;
  };
  fullSpecs: {
    dimensions?: string;
    weight?: string;
    storage: string;
    ram: string;
    cameraMain: string;
    cameraFront: string;
    battery: string;
    display: string;
    cpu: string;
    sim: string;
    comms: string;
    network: string;
    os: string;
    extras?: string;
    protection?: string;
    audio?: string;
  };
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  zip: string;
  phone: string;
  comments: string;
}

export type PaymentMethod = 'stripe' | 'crypto' | 'rub';

export interface ComparisonState {
  items: Product[];
}
