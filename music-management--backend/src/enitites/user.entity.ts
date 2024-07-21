export const createGenderEnumQuery = `
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'gender_enum') THEN
        CREATE TYPE gender_enum AS ENUM ('m', 'f', 'o');
    END IF;
END$$;`;

export const createUserTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
     id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(500),
    phone VARCHAR(20),
    dob DATE,
    gender gender_enum,
    address VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
