import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "@/types"

interface WishlistState {
  items: Product[]
}

const initialState: WishlistState = {
  items: [],
}

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some((item) => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearWishlist: (state) => {
      state.items = []
    },
    setWishlist: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload
    },
  },
})

export const { addToWishlist, removeFromWishlist, clearWishlist, setWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer
