import Link from "next/link";

export default async function ArticleDetailPage({ params, searchParams }:{
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" }>;
}) {
    const  {articleId}  = await params;
    const  {lang="en"}  = await searchParams;
    return (
        <div>
            <h1>Article Detail Page</h1>
            <p>In Language {lang}</p>
            <p>Article ID: {articleId}</p>
            <Link href={`/article/${articleId}?lang=en`}>Read in English</Link><br />
            <Link href={`/article/${articleId}?lang=es`}>Read in Spanish</Link><br />
        </div>
    );
}
