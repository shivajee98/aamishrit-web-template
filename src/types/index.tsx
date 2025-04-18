export interface Product {
  ID: number
  name: string
  description: string
  quantity: number
  longDescription?: string
  price: number
  originalPrice?: number
  stock: number
  rating: number
  reviewCount: number
  features: string[]
  images: any[]
  weight?: string
  dimensions?: string
  modelNumber?: string
  warranty?: string
  countryOfOrigin?: string
  onSale?: boolean
  isActive?: boolean
  isFeatured?: boolean
  Category: [
    name: string,
    description: string,
    slug: string
  ]
}

export interface Review {
  id: number
  user: string
  avatar: string
  rating: number
  date: string
  title: string
  comment: string
}

export interface UserAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  isDefault: boolean;
}

export interface CartItem extends Product {
  quantity: number
  productImages: string[]
}

export interface PaymentInfo {
  method: string
}

export interface Order {
  id: string
  date: string
  status: "processing" | "shipped" | "delivered" | "cancelled"
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: UserAddress
  payment: {
    method: string
    cardLast4?: string
    date: string
  }
  trackingNumber?: string
  estimatedShipping?: string
  estimatedDelivery?: string
  timeline?: {
    confirmed: string
    processing: string
    shipped?: string
    delivered?: string
    cancelled?: string
  }
}


export interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  images: []
  items: CartItem[]
  shippingAddress: UserAddress
  paymentInfo: PaymentInfo
  subtotal: number
  shipping: number
  tax: number
  total: number
  status: string
  createdAt: string
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
  images: string[];
  products: Product[];
}

export type NewUser = {
  name: string;
  email?: string; // if you're capturing this
};
