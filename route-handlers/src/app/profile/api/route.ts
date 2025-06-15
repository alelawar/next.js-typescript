export async function GET() {
  return new Response('Profile Page', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}