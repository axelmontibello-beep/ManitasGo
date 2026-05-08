import { sql } from "@vercel/postgres";

export { sql };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function query<T>(text: string, values?: any[]): Promise<T[]> {
  const result = await sql.query<T>(text, values);
  return result.rows;
}
