import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./lib/supabase-server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  const protectedRoutes = ["/dashboard", "/onboarding"];
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

  if (isProtected && !data.user) {
    const redirectUrl = new URL("/login", request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding/:path*"],
};
