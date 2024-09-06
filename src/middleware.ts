import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/en") || pathname.startsWith("/kr")) {
    return createMiddleware(routing)(req);
  }

  const acceptLanguage = req.headers.get("accept-language");
  console.log(acceptLanguage);
  const preferredLocale = acceptLanguage?.split(",")[0].split("-")[0];
  console.log("preferredLocale:", preferredLocale);

  const defaultLocale = preferredLocale === "ko" ? "kr" : "en";

  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, req.url),
  );
}

export const config = {
  matcher: ["/", "/(kr|en)/:path*"],
};
