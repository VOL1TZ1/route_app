import { redirect } from "next/navigation";

export default async function ReviewPage({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
    
    const random = getRandomInt(2);
    const resolvedParams = await params;

    if (random === 0) {
        throw new Error("Random error occurred while fetching review page.");
    }
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
function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

