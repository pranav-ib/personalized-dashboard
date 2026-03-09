"use client";

import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../store/store";
import {setQuery} from "../features/searchSlice";
import {User} from "lucide-react";
import Link from "next/link";

export default function Navbar(){

    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.search.query);

    return(
       <div className="sticky top-0 z-50 w-[95%] md:w-[80%] lg:w-[60%] mx-auto mt-2 bg-white rounded-full shadow-md px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between gap-3 flex-wrap">
            <h1 className="text-xl sm:text-2xl lg:text-3xl">My Dashboard</h1>
            
            <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
                <input type="text" placeholder="Search content..."
                    value={query}
                    onChange={(e)=> dispatch(setQuery(e.target.value))}
                    className="px-4 py-2 w-full sm:w-72 md:w-80 rounded-full border border-gray-400 outline-none focus:ring-2 focus:ring-purple-400"
                />

                <Link href="/profile">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={24}/>
                    </div>
                </Link>
            
            </div>

        </div>            
    );
}