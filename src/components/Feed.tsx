"use client";

import { useDispatch , useSelector} from "react-redux";
import { setFeed } from "../features/feedSlice";
import { RootState, AppDispatch} from "../store/store";
import { fetchNews } from "../services/newApi";

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

        console.log("API response:", articles);

        const formatted = articles.map((a: any, index: number) => ({
            id: index,
            title: a.title
        }));

        dispatch(setFeed(formatted));
    };

    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="border p-4 rounded">Content Card</div>
            <div className="border p-4 rounded">Content Card</div>
            <div className="border p-4 rounded">Content Card</div>

            <button onClick={loadNews} className="border px-4 py-2"> 
                Load Test Feed
            </button>

            {feed.map((item: any) => (
                <div key={item.id} className="border p-3 rounded mb-2">
                {item.title}
                </div>
            ))}
        </div>
    );
}