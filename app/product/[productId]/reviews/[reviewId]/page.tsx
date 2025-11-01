import NotFoundPage from "@/app/not-found";
import { redirect } from "next/navigation";

export default async function ReviewPage({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
    const resolvedParams = await params;
    if (resolvedParams.reviewId <= "1000") {
        return (
            <div>
                <h1>Review Page</h1>
                <p>Details for product ID: {resolvedParams.productId}</p>
                <p>Details for review ID: {resolvedParams.reviewId}</p>
            </div>
        );
    }
    return (redirect('/product')); // Redirect to /product if reviewId > 1000
}
