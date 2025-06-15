export async function GET() {
  return new Response('User Page', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}