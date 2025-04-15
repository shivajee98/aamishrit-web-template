// src/app/checkout/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CheckoutPage() {
    const user = await currentUser();

    if (!user) {
        redirect("/sign-in?redirect_url=/checkout");
    }

    return (
        <main className="max-w-3xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <p className="text-gray-600">Welcome, {user.firstName}! Your checkout process starts here.</p>
            
        </main>
    );
}
