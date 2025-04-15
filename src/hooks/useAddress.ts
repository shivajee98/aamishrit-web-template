// hooks/useAllCategories.ts
import { useQuery } from "@tanstack/react-query";
import { fetchUserAddress } from "@/api/user";
import { UserAddress } from "@/types";

export function useUserAddress() {
    return useQuery<UserAddress>({
        queryKey: ["userAddress"],
        queryFn: fetchUserAddress,
        retry: false
    })
}