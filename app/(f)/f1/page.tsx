import Link from "next/link";
export default function F1Page() {
    return (
        <div>
            <h1>F1 Page</h1>
            <ul>
                <li><Link href="/f1/f2">Go to F2 Page</Link></li>
                <li><Link href="/f3">Go to F3 Page</Link></li>
            </ul>
            
        </div>
    );
}