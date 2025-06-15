"use client";
import Link from "next/link";
import {use} from "react";
// This is a dynamic route for articles with an optional language parameter
// The page will display the article ID and allow switching between languages
export default  function ArticlePage({params, searchParams}: {
  params: Promise<{ articlesId: string }>,
  searchParams: Promise<{ lang?: "en" | "id" }> 
}) {
  const { articlesId } =  use(params);
  const { lang = "en" } =  use(searchParams);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Article Page</h1>
      <p className="text-lg">Reading the languages : <span className="font-bold">{lang}</span></p>
      <p className="text-sm text-gray-500 mt-2">You can switch the languages here.</p>
      <Link href={`/articles/${articlesId}?lang=${lang === "en" ? "id" : "en"}`} className="text-blue-500 hover:underline">
        Switch to {lang === "en" ? "Indonesian" : "English"}
      </Link>
    </div>
  );
}