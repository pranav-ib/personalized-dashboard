"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){
     const pathname = usePathname();

    const linkStyle = (path: string) =>
        `px-3 py-2 rounded-lg transition 
        ${pathname === path 
        ? "bg-purple-100 text-purple-700 font-semibold" 
        : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"}`;
        
    return(
        <div className="flex gap-10 p-10">
            <aside className="w-56 bg-gray-100 rounded-3xl shadow-md p-6">
                <nav className="flex flex-col gap-3 text-gray-700 font-medium">
                    <a href="/feed" className={linkStyle("/feed")}>Your Feed</a>
                    <a href="/trending" className={linkStyle("/trending")}>Trending</a>
                    <a href="/favorites" className={linkStyle("/favorites")}>Favorites</a>
                    <a href="/preferences" className={linkStyle("/preferences")}>Preferences</a>
                </nav>
            </aside>
        </div>
    );
}



/*
export default function Sidebar(){
    return(
        <div className="w-64 bg-white rounded-xl p-6 shadow-md">
            <nav className="flex flex-col gap-4">
                <Link href="/feed">Your Feed</Link>
                <Link href="/trending">Trending</Link>
                <Link href="/favorites">Favorites</Link>
                <Link href="/preferences">Preferences</Link>
            </nav>
        </div>
    );
}

*/