type Props = {
    params: Promise<{ productId: string }>;
};
export const generateMetadata = async ({ params }: Props) => {
    const id = await params;
    return {
        title: `Product ${id.productId} Details`,
        description: `Details and information about product ${id.productId}.`,
    };
};

export default async function ProductDetailPage({ params }: Props) {
    const resolvedParams = await params;
    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>Details for product ID: {resolvedParams.productId}</p>
        </div>
    );
}
