"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 p-4"> 
      <ul className="flex justify-center space-x-8 list-none">
        <li>
          <Link href="/home" className={pathname === "/home" ? "text-yellow-400" : "text-white hover:text-yellow-400"}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? "text-yellow-400" : "text-white hover:text-yellow-400"}>About</Link>
        </li>
        <li>
          <Link href="/products" className={pathname === "/products/id" ? "text-yellow-400" : "text-white hover:text-yellow-400"}>Products</Link>
        </li>
        
      </ul>
    </nav>
  );
}

{/* localhost:3001/home */}