"use client";

import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../store/store";
import {setQuery} from "../features/searchSlice";

export default function Navbar(){

    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.search.query);

    return(
        <div className="sticky top-0 z-50 w-[85%] mx-auto mt-2 bg-white rounded-full shadow-md px-8 py-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-purple-900">My Dashboard</h1>
            
            <input type="text" placeholder="Search content..."
                value={query}
                onChange={(e)=> dispatch(setQuery(e.target.value))}
                className="px-5 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
            />

        </div>            
    );
}