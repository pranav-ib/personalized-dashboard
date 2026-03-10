"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){
     const pathname = usePathname();

    const linkStyle = (path: string) =>
        `px-3 py-2 rounded-lg text-center transition 
        ${pathname === path 
        ? "bg-purple-100 text-purple-700 font-semibold" 
        : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"}`;
        
    return(

         <aside className="w-56 sticky top-1/2 -translate-y-1/2 h-fit">
            <div className="hidden md:block rounded-3xl shadow-md p-6 h-fit flex flex-col justify-center bg-gray-100 dark:bg-gray-100/10 backdrop-blur-md border border-white/20">

            <nav className="flex flex-col gap-3 font-medium">

                <Link href="/feed" className={linkStyle("/feed")}>
                    Your Feed
                </Link>

                <Link href="/trending" className={linkStyle("/trending")}>
                    Trending
                </Link>

                <Link href="/favorites" className={linkStyle("/favorites")}>
                    Favorites
                </Link>

                <Link href="/preferences" className={linkStyle("/preferences")}>
                    Preferences
                </Link>

            </nav>

      </div>


         </aside>
        
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