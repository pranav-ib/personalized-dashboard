"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCategory } from "../features/preferenceSlice";

export default function Preferences() {

    const dispatch = useDispatch();
    const category = useSelector((state : RootState) => state.preferences.category);

    return (
        <div className="mb-6">
            <label className="mr-2 font-semibold">
                News Category: 
            </label>

            <select value={category}
                onChange={(e)=>  dispatch(setCategory(e.target.value))}
                className="border px-3 py-1 rounded"
            >
                <option value="general">General</option>
                <option value="technology">Technology</option>
                <option value="sports">Sports</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
            </select>
        </div>

    );
}
