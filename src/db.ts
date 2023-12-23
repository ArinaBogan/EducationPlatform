import { Pool } from "pg";

const pool = new Pool({
  password: "28092002*",
  database: "education_platform",
  port: 5432,
  host: "localhost",
  user: "postgres",
});

export default pool;