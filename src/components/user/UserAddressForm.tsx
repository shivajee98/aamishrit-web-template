// src/components/user/UserAddressForm.tsx
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { UserAddress } from "@/types";
import { useUserAddress } from "@/hooks/useAddress";

const UserAddressForm = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const { data, error, isLoading } = useUserAddress();
    const { user } = useUser();
    const [address, setAddress] = useState<UserAddress>({
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        isDefault: false,
    });

    // Update address state if user is logged in and address data is available
    useEffect(() => {
        if (data) {
            setAddress(data); // Pre-fill address fields if data is fetched
        }
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setAddress((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the address submission logic here, such as an API call to save the address
        console.log("Submitting address: ", address);
    };

    if (!isLoggedIn) {
        return (
            <form className="space-y-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full border px-4 py-2 rounded-md"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border px-4 py-2 rounded-md"
                />
                {/* Add any other public form fields */}
            </form>
        );
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Failed to load address data</p>;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={address.street}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
            />
            <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
            />
            <input
                type="text"
                name="country"
                placeholder="Country"
                value={address.country}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
            />
            <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={address.zipCode}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-md"
            />
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="isDefault"
                    checked={address.isDefault}
                    onChange={handleChange}
                />
                <span>Set as default address</span>
            </label>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                Save Address
            </button>
        </form>
    );
};

export default UserAddressForm;
