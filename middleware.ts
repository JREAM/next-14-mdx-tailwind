import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  if (request.nextUrl.pathname.startsWith("/posts/"))
    requestHeaders.set("x-next-post-slug", request.nextUrl.pathname.replace("/posts/", ""));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/posts/:path*",
};
