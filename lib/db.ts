import postgres from 'postgres';
let client: ReturnType<typeof postgres> | undefined;
export function db() { if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is missing'); return client ??= postgres(process.env.DATABASE_URL, { ssl: process.env.DATABASE_URL.includes('localhost') ? false : 'require', max: 5 }); }
