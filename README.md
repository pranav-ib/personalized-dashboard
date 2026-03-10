# Personalized Content Dashboard

A responsive dashboard that aggregates content from multiple sources (News, Movies, Social posts) into a unified feed. Users can search, filter, reorder, and save content to personalize their experience.

## Live Demo

https://my-dashboard-ten-snowy.vercel.app

## Features

* **Unified Content Feed**

  * Displays news, movie recommendations, and social posts in one dashboard.

* **Search Functionality**

  * Real-time search across titles and descriptions.

* **User Preferences**

  * Select preferred news categories to customize the feed.

* **Favorites**

  * Users can mark content as favorite and access it from the Favorites section.

* **Drag-and-Drop**

  * Reorder content cards interactively.

* **Responsive Layout**

  * Works across desktop, tablet, and mobile devices.

* **Dark Mode**

  * Theme switching between light and dark mode.

* **Profile Page**

  * Save user name and email using local storage.

## Technologies Used

* **Next.js**
* **React**
* **Redux Toolkit**
* **Tailwind CSS**
* **Framer Motion**
* **NewsAPI**
* **TMDB API**
* **JSONPlaceholder API**

## Project Structure

```
src/
 ├── app/            # Next.js pages
 ├── components/     # UI components (Navbar, Sidebar, Card, Feed)
 ├── features/       # Redux slices
 ├── services/       # API integrations
 ├── hooks/          # Custom hooks
 └── store/          # Redux store configuration
```

## APIs Used

* News API – Fetch latest news articles
* TMDB API – Movie recommendations
* JSONPlaceholder – Mock social media posts

## Installation

Clone the repository:

```
git clone https://github.com/pranav-ib/personalized-dashboard
```

Navigate to the project folder:

```
cd personalized-dashboard
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

## Environment Variables

Create a `.env.local` file and add:

```
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
