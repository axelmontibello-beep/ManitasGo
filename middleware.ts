import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Fase 1: las rutas protegidas redirigen a /login si no hay sesión
// Fase 2: usar `auth` de NextAuth para validación completa
const protectedPaths = ["/home", "/tareas", "/mensajes", "/cuenta", "/perfil", "/metodos-pago"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));

  if (isProtected) {
    const token =
      request.cookies.get("authjs.session-token") ??
      request.cookies.get("__Secure-authjs.session-token");

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo-manitas-go.png).*)"],
};
