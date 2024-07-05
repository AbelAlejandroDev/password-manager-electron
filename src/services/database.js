import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const initializeDatabase = async () => {
  const db = await open({
    filename: './password-manager.db',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS passwords (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      service TEXT NOT NULL,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);

  return db;
};

export default initializeDatabase;
