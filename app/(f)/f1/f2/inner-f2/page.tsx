import Link from "next/link";
export default function InnerF2Page() {
    return (
        <div>
            <h1>Inner F2 Page</h1>
            <ul>
                <li><Link href="/f5">Go to F5 Page</Link></li>
            </ul>
            
        </div>
    );
}