export default async function ReviewsPage({ params }: { params: Promise<{ productId: string }> }) {
    const resolvedParams = await params;
    return (
        <div>
            <h1>Reviews Page</h1>
            <p>Details for product ID: {resolvedParams.productId}</p>
        </div>
    );
}
