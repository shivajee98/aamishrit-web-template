// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "@/types"

interface CartState {
    product: Product | null
    quantity: number
}

const initialState: CartState = {
    product: null,
    quantity: 1,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
            state.product = action.payload.product
            state.quantity = action.payload.quantity
        },
    },
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer
