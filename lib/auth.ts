import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const googleConfigured =
  process.env.GOOGLE_CLIENT_ID &&
  !process.env.GOOGLE_CLIENT_ID.includes("placeholder");

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      credentials: {
        email:    { label: "Email",      type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        // Fase 1 (mock): acepta cualquier credencial para desarrollo de UI
        // Fase 2: validar email/hash contra Vercel Postgres
        return {
          id:    "demo-hogarista",
          email: credentials.email as string,
          name:  "María García",
          tipo:  "hogarista",
        };
      },
    }),
    ...(googleConfigured
      ? [Google({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! })]
      : []),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id   = user.id;
        token.tipo = (user as { tipo?: string }).tipo ?? "hogarista";
      }
      return token;
    },
    session({ session, token }) {
      const u = session.user as { id?: string; tipo?: string };
      u.id   = token.id as string;
      u.tipo = token.tipo as string;
      return session;
    },
  },
});
