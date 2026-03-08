"use client";

import { useDispatch , useSelector} from "react-redux";
import { setFeed } from "../features/feedSlice";
import { RootState, AppDispatch} from "../store/store";
import { fetchNews } from "../services/newApi";
import Card from "./Card";
import { fetchMovies } from "../services/movieApi";

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
        const movies = await fetchMovies();
     //   console.log("API response:", articles);

        const formattedNews = articles.map((a: any, index: number) => ({
            id: index,
            title: a.title,
            description: a.description,
            image: a.urlToImage,
            type: 'news'
        }));

        const formattedMovies = movies.map((a:any, index: number) => ({
            id: index + 1000, // To avoid ID conflicts with news
            title: a.title,
            description: a.overview,
            image: `https://image.tmdb.org/t/p/w500${a.poster_path}`,
            type: 'movie'
        }));

        dispatch(setFeed([...formattedNews, ...formattedMovies]));
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