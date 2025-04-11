export interface Product {
    id: string
    name: string
    description: string
    longDescription?: string
    price: number
    originalPrice?: number
    productImages: string[]
    stock: number
    rating: number
    reviewCount: number
    features: string[]
    weight?: string
    dimensions?: string
    modelNumber?: string
    warranty?: string
    countryOfOrigin?: string
    onSale?: boolean
    isActive?: boolean
    isFeatured?: boolean
    category: {
      name: string
      slug: string
    }
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

  export interface Address {
    id: string
    fullName: string
    addressLine1: string
    addressLine2?: string
    landmark?: string
    city: string
    state: string
    pinCode: string
    country: string
    mobileNumber: string
    isDefault: boolean
    userId?: string
  }

  export interface CartItem extends Product {
    quantity: number
  }

  export interface PaymentInfo {
    method: string
    cardNumber?: string
    cardName?: string
    expiryDate?: string
    cvv?: string
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
    shippingAddress: Address
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
    images: string[]
  }

  export interface User {
    id: string
    name: string
    email: string
    image?: string
  }

  export interface Category {
    id: string
    name: string
    slug: string
    description?: string
    productImages?: string[]
    featured?: boolean
  }

  export interface WishlistItem {
    id: string
    productId: string
    userId: string
    product: Product
  }
