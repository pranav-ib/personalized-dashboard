"use client";
import Link from "next/link";

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