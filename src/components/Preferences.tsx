"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCategory } from "../features/preferenceSlice";

const categories = ["general", "technology", "sports", "business", "entertainment", "health", "science"];

export default function Preferences() {

    const dispatch = useDispatch();
    const selected = useSelector((state : RootState) => state.preferences.categories);

    return (
        <div className="mb-6 p-6">
            <label className="text-2xl font-bold mb-4">
                Preferences
            </label>
            <div className="mt-4"></div> 
            <div className="flex flex-wrap gap-3">
                {categories.map((cat) => {
                    const active = selected.includes(cat);

                    return (
                        <button key={cat} onClick={() => dispatch(setCategory(cat))}
                            className={`px-4 py-2 rounded-full border transition
                            ${active
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-gray-200/20 hover:bg-purple-500"}
                        `}>
                            {cat}
                        </button>
                    );
        })}
            </div>
            

    {/*        <select value={category}
                onChange={(e)=>  dispatch(setCategory(e.target.value))}
                className="border px-3 py-1 rounded"
            >
                <option value="general">General</option>
                <option value="technology">Technology</option>
                <option value="sports">Sports</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
            </select>

    */}
        </div>

    );
}
