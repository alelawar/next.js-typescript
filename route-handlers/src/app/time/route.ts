export const dynamic = 'force-static';
// This file defines a route for fetching the current time in a Next.js application.
export async function GET() {
    return Response.json({time: new Date().toLocaleTimeString() })
}