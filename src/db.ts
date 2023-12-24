import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { NAME_DB, PWD_DB, PORT_DB, HOST_DB, USER_DB } = process.env;

const pool = new Pool({
  password: '28092002*',
  database: 'education_platform',
  port: 5432,
  host: 'localhost',
  user: 'postgres',
});

export default pool;
