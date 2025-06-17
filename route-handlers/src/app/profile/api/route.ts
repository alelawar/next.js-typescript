import { log } from "console";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get('Authorization'));

  // const headerList = await headers();
  // log('Headers:', headerList.get('Authorization'));

  // const h = await headers();
  // const token = h.get('Authorization');

  // if (token !== "Bearer 121") {
  //   return new Response('Unauthorized', {
  //     status: 401
  //   }
  //   )
  // } else {
  //   return new Response('Authorized', {
  //     status: 200
  //   })
  // }

  const theme = request.cookies.get('theme')?.value || 'light';
  log('Theme:', theme);

  const cookieStore = await cookies();
  cookieStore.set('requestPerPage', '10');

  return new Response('Profile Page', {
    headers: {
      'Content-Type': 'text/plain',
      "Set-Cookie": "theme=dark",
    },
  });
}