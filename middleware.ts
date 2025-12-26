import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const proto = request.headers.get('x-forwarded-proto');

  // Check if the protocol header is corrupted (contains a comma or space)
  if (proto && (proto.includes(',') || proto.includes(' '))) {
    // Take only the first "https"
    const cleanProto = proto.split(',')[0].trim();
    
    // Clone the headers and set the clean version
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-forwarded-proto', cleanProto);

    // Continue the request with the fixed headers
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }
  
  return NextResponse.next();
}

// Ensure this runs on all paths, especially sitemaps
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
