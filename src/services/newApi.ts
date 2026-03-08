const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const fetchNews = async (categories : string[]) => {

  if(!categories || categories.length === 0) {
    categories = ["general"];
  }
  const results = await Promise.all(
    categories.map(async (category) =>{
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );

      const data = await res.json();

      return data.articles || [];
    }) 
  )
  return results.flat();
};