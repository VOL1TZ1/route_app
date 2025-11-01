'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'Forgot Password', path: '/forgotPassword' }
];
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    
    const pathname = usePathname();
    const [input, setInput] = useState('');
    
    return (
        <>
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} 
            placeholder="type something..." />
            {navLinks.map((link => {
                const isActive = pathname === link.path && link.path !== '/';
                return (
                <Link className={isActive ? 'font-bold mr-4' : "text-blue-500 mr-4"} href={link.path} 
                key={link.name}>
                     {link.name}
                     </Link>
                    )
                    }))
                    }
            
        </div>
        {children}
        </>
        
    );
}