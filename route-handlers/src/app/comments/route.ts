import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("s") || "";

  const filteredComments = query ? comments.filter(comment => comment.text.toLowerCase().includes(query.toLowerCase())) : `comments not found for query: ${query}`;
  return new Response(JSON.stringify(filteredComments), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}

export async function POST(request: Request) {
  const newComment = await request.json();
  if (!newComment || !newComment.text) {
    return new Response("Invalid comment data", { status: 400 });
  }

  // Simulate adding the comment to the database
  const id = comments.length + 1;
  const comment = { id, text: newComment.text };
  comments.push(comment);

  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache", // No cache for POST responses
    },
    status: 201,
  });
}