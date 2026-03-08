const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const fetchMovies = async () => {
    const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await res.json();

    return data.results;
};