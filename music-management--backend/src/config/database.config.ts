import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "music_management",
  password: "12345",
  port: 5432,
});


