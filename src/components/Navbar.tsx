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
        <div className="sticky top-0 z-50 w-[60%] mx-auto mt-2 bg-white rounded-full shadow-md px-8 py-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-purple-900">My Dashboard</h1>
            
            <div className="flex gap-6">
                <input type="text" placeholder="Search content..."
                    value={query}
                    onChange={(e)=> dispatch(setQuery(e.target.value))}
                    className="px-4 py-2 w-full sm:w-80 rounded-full border border-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
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