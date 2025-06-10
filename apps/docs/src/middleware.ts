import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware can be used to add custom headers, redirects, etc.
export function middleware(request: NextRequest) {
  // Add security headers
  const response = NextResponse.next();
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
