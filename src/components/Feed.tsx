"use client";

import { useDispatch , useSelector} from "react-redux";
import { setFeed } from "../features/feedSlice";
import { RootState, AppDispatch} from "../store/store";
import { fetchNews } from "../services/newApi";
import Card from "./Card";
import { fetchMovies } from "../services/movieApi";
import { fetchSocial } from "../services/socialApi";
import { title } from "process";
import { useEffect } from "react";

function shuffleArray(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
}

export default function Feed() {
    const dispatch = useDispatch();

    const feed = useSelector((state: RootState) => state.feed.items);

    const testFeed = () =>{
        dispatch(setFeed([{
            id:1, title: "Test Post"
        }]))
    }

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {

        const articles = await fetchNews();
        const movies = await fetchMovies();
        const social = await fetchSocial();
     //   console.log("API response:", articles);

        const formattedNews = articles.map((a: any, index: number) => ({
            id: "news-" + index,
            title: a.title,
            description: a.description,
            image: a.urlToImage,
            type: 'news'
        }));

        const formattedMovies = movies.map((a:any, index: number) => ({
            id: "movie-" + index,
            title: a.title,
            description: a.overview,
            image: `https://image.tmdb.org/t/p/w500${a.poster_path}`,
            type: 'movie'
        }));

        const formattedSocial = social.map((a:any, index: number) => ({
            id: "social-" + index,
            title: a.title,
            description: a.body,
            image: `https://via.placeholder.com/150`,
            type: 'social'
        })
        )

        dispatch(setFeed(shuffleArray([...formattedNews, ...formattedMovies, ...formattedSocial])));
    };

    return (
        <div className="p-6">

            <div className="grid grid-cols-3 gap-10">
                {feed.map((item: any) => (
                    <Card key={item.id} id={item.id} title={item.title} description={item.description} image={item.image} type={item.type} />
                ))}
            </div>
        </div>
    );
}