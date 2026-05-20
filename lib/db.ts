import { sql } from "@vercel/postgres";

// Fase 1: dbReady = false cuando POSTGRES_URL es placeholder
// Fase 2: cuando se conecte Vercel Postgres, dbReady = true y las API routes usan sql
export const dbReady =
  !!process.env.POSTGRES_URL &&
  !process.env.POSTGRES_URL.includes("placeholder");

export { sql };
