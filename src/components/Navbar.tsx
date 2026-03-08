"use client";

import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../store/store";
import {setQuery} from "../features/searchSlice";

export default function Navbar(){

    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.search.query);

    return(
        <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
            <h1 className="text-lg font-bold">My Dashboard</h1>
            
            <input type="text" placeholder="Search content..."
                value={query}
                onChange={(e)=> dispatch(setQuery(e.target.value))}
                className=" border px-4 py-2 rounded-lg"
         />
        </div>            
    );
}