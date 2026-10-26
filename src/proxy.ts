import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ACCESS_TOKEN_COOKIE } from '@/features/auth/utils/session';

// Dashboard access is gated on the access token cookie set at sign-in.
// The backend still validates the token on every API call.
export function proxy(req: NextRequest) {
  const hasSession = req.cookies.has(ACCESS_TOKEN_COOKIE);

  if (req.nextUrl.pathname.startsWith('/dashboard') && !hasSession) {
    const signInUrl = req.nextUrl.clone();
    signInUrl.pathname = '/auth/sign-in';
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)'
  ]
};
