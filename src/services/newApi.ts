const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const fetchNews = async () => {

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );

  const data = await res.json();

  if (data.status !== "ok") {
    console.error("News API error:", data);
    return [];
  }

  return data.articles;
};