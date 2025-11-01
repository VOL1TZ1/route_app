"use client";
import { useRouter } from "next/navigation";

export default function PlaceOrderPage() {
   const router = useRouter();
    const clickHandler = () => {
        console.log("Order Placed!");
        router.replace("/");
    }
    return (
        <div>
            <h1>Place Order Page</h1>
            <button onClick={clickHandler}>Place Order</button>
        </div>
    );
}