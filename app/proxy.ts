import { NextResponse } from "next/server";

const locales = ["en", "ar"];

function getLocale(request:any) {
  const accepted = request.headers.get("accept-language")?.split(",")[0];
  const short = accepted?.split("-")[0];
  return locales.includes(short) ? short : "en";
}

export function proxy(request:any) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(locale =>
    pathname.startsWith(`/${locale}`)
  );

  if (hasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
