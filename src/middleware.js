import { NextResponse, userAgent } from "next/server";

export const config = {
  matcher: ["/", "/thank-you"],
};

export function middleware(req) {
  const { device } = userAgent(req);
  const { pathname } = req.nextUrl;

  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  req.nextUrl.pathname = viewport + pathname;

  return NextResponse.rewrite(req.nextUrl);
}
