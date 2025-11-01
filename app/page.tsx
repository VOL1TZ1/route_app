import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <Link href="/blog/">Go to Blog Page</Link><br />
    <Link href="/product">Go to Product Page</Link><br />

    <Link href="/article/first?lang=en">Read in English</Link><br />
    <Link href="/article/first?lang=es">Read in Spanish</Link><br />

    </>
  )
}

