"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useUserAddress, useCreateUserAddress } from "@/hooks/useAddress";
import { UserAddress } from "@/types";

const defaultAddress: UserAddress = {
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    isDefault: false,
};

const UserAddressForm = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const { data, isLoading } = useUserAddress();
    const { mutate: createAddress, isPending } = useCreateUserAddress();
    const [address, setAddress] = useState<UserAddress>(defaultAddress);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        // Do this ONCE when loading is done
        if (!isLoading && !initialized) {
            if (data) {
                setAddress(data);
            } else {
                setAddress(defaultAddress);
            }
            setInitialized(true);
        }
    }, [data, isLoading, initialized]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setAddress((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createAddress(address);
    };

    if (!isLoggedIn) return null;
    if (isLoading || !initialized) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {["street", "city", "state", "country", "zipCode"].map((field) => (
                <input
                    key={field}
                    type="text"
                    name={field}
                    placeholder={field}
                    value={(address as any)[field]}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-md"
                />
            ))}
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="isDefault"
                    checked={address.isDefault}
                    onChange={handleChange}
                />
                <span>Set as default address</span>
            </label>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md"
                disabled={isPending}
            >
                {isPending ? "Saving..." : "Save Address"}
            </button>
        </form>
    );
};

export default UserAddressForm;
