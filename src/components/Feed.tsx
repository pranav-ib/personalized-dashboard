"use client";

import { useDispatch , useSelector} from "react-redux";
import { setFeed } from "../features/feedSlice";
import { RootState, AppDispatch} from "../store/store";
import { fetchNews } from "../services/newApi";
import Card from "./Card";

export default function Feed() {
    const dispatch = useDispatch();

    const feed = useSelector((state: RootState) => state.feed.items);

    const testFeed = () =>{
        dispatch(setFeed([{
            id:1, title: "Test Post"
        }]))
    }

    const loadNews = async () => {

        const articles = await fetchNews();

     //   console.log("API response:", articles);

        const formatted = articles.map((a: any, index: number) => ({
            id: index,
            title: a.title,
            description: a.description,
            image: a.urlToImage
        }));

        dispatch(setFeed(formatted));
    };

    return (
        <div className="p-6">

            <button onClick={loadNews} className="border px-4 py-2"> 
                Load Test Feed
            </button>

            <div className="grid grid-cols-3 gap-6">
                {feed.map((item: any) => (
                    <Card key={item.id} title={item.title} description={item.description} image={item.image} />
                    
                ))}
            </div>
        </div>
    );
}