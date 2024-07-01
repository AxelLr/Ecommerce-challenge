// app/middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const referrer = req.headers.get("referer");

  if (pathname.match(/^\/store\/accesorios\/[a-zA-Z0-9-]+\/recibo$/)) {
    const isValidReferrer = await checkValidReferrer(referrer);

    if (!isValidReferrer) {
      return NextResponse.redirect(`${origin}/`);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/store/accesorios/:path*"],
};

async function checkValidReferrer(referrer: string) {
  return referrer && referrer.includes("/store/accesorios");
}
