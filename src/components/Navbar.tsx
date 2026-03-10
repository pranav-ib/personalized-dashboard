"use client";

import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../store/store";
import {setQuery} from "../features/searchSlice";
import {User} from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){

    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.search.query);

    return(
       <div className="sticky top-0 z-50 w-[95%] md:w-[80%] lg:w-[60%] mx-auto mt-2 rounded-full shadow-md px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between gap-3 flex-wrap
                        bg-red-500 dark:bg-purple-200/10 backdrop-blur-md border border-white/20  transition-colors duration-300">
            
            <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">My Dashboard</h1>
            
            <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
                <ThemeToggle />
                <input type="text" placeholder="Search content..."
                    value={query}
                    onChange={(e)=> dispatch(setQuery(e.target.value))}
                    className="px-4 py-2 w-full sm:w-72 md:w-60 rounded-full border border-gray-400 dark:text-gray-400 outline-none focus:ring-2 focus:ring-purple-400"
                />

                <Link href="/profile">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-200/50 blackdrop-blur-md flex items-center justify-center">
                        <User size={24}/>
                    </div>
                </Link>
            
            </div>

        </div>            
    );
}