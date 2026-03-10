"use client";

import {Moon, Sun} from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle(){

    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if(saved === "dark"){
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);


    const toggleTheme = () => {
        if(dark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setDark(!dark);
    };

    return (
        <button onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                {dark ? <Moon size={20}/> : <Sun size={20}/> }
            </button>
    )
}