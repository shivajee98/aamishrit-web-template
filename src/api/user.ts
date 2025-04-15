import { UserAddress } from "@/types"
import axios from "@/utils/axios"

export async function fetchUserAddress(): Promise<UserAddress> {
    const res = await axios.get("/api/address")
    return res.data
}