import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CartItem, Product } from "@/types"

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({
          ...product,
          quantity,
        })
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item.id === id)

      if (item) {
        item.quantity = quantity
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    openCart: (state) => {
      state.isOpen = true
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart, closeCart, openCart } =
  cartSlice.actions

export default cartSlice.reducer
