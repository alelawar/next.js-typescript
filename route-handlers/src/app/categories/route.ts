export const dynamic = 'force-static';
// This file defines a route for fetching categories in a Next.js application.

export async function GET() {
    const categories = [
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Health' },
        { id: 3, name: 'Finance' },
        { id: 4, name: 'Education' },
        { id: 5, name: 'Entertainment' }
    ];
    return Response.json(categories)
}