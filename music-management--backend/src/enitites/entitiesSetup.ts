import { pool } from "../config/database.config";
import { createGenderEnumQuery, createUserTableQuery } from "./user.entity";

export const setupDatabase = async () => {
  try {
    await pool.query(createGenderEnumQuery);
    await pool.query(createUserTableQuery);
    console.log('Tables are successfully created or already exists.');
  } catch (err) {
    console.error("Error creating table", err);
  }
};
