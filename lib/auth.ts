import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.tipo = (user as any).tipo;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        (session.user as any).tipo = token.tipo;
      }
      return session;
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "placeholder",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "placeholder",
    }),
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) return null;
        // TODO: implementar con Vercel Postgres
        return null;
      },
    }),
  ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
