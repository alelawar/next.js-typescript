export async function GET() {
  return new Response('Dashboard Page', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}