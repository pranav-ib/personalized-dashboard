"use client";

import {useSelector } from "react-redux";
import { RootState } from "../store/store";
import Card from "./Card";
import { Root } from "react-dom/client";

export default function Favorites() {
    
    const favorites = useSelector((state: RootState) => state.favorites.items);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Favorites</h2>

            <div className="grid grid-cols-3 gap-10">
                {favorites.map((item: any) => (
                    <Card key={item.id} id={item.id} title={item.title} description={item.description} image={item.image} url={item.url} type={item.type} />
                ))}
            </div>
        </div>
    );
}