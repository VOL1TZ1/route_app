export default async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const resolvedParams = await params;
    return (
        <div>
            <h1>Docs Page</h1>
            <p>Details for slug: {resolvedParams.slug.join("/")}</p>
        </div>
    );
}
