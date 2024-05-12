import * as schema from 'drizzle/schema'
import { drizzle } from 'drizzle-orm/postgres-js';
// import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { UsersTable } from 'drizzle/schema';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle

interface NewUserFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const client = postgres(`${process.env.POSTGRES_URL!}`, { max: 1 });
const db = drizzle(client, { schema })

// const users = pgTable('users', {
//   id: serial('id').primaryKey(),
//   email: varchar('email', { length: 64 }),
//   password: varchar('password', { length: 64 }),
// });

export async function getUser(email: string) {
  return await db.select().from(UsersTable).where(eq(UsersTable.email, email));
}

export async function createUser(newUserFormData: NewUserFormData) {
  const { email, password, firstName, lastName } = newUserFormData;
  try {
    let salt = genSaltSync(10);
    let hash = hashSync(password, salt);
  
    return await db.insert(UsersTable).values({
      email,
      password: hash,
      firstName,
      lastName,
    });
  } catch (error) {
    debugger
  }
}
