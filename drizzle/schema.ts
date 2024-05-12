import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
 
export const UsersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    firstName: text('firstName').notNull(),
    lastName: text('lastName').notNull(),
    email: text('email').notNull(),
    password: varchar('password', { length: 64 }),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  },
);

export const ReportsTable = pgTable(
  'reports',
  {
    id: serial('id').primaryKey(),
    userId: integer('user_id')
      .notNull()
      .references(() => UsersTable.id),
    airScore: integer('air_score').notNull(),
    animalsScore: integer('animals_score').notNull(),
    fireScore: integer('fire_score').notNull(),
    insideOutsideScore: integer('inside_outside_score').notNull(),
    naturaLightScore: integer('natural_light_score').notNull(),
    naturalMaterialsScore: integer('natural_materials_score').notNull(),
    plantsScore: integer('plants_score').notNull(),
    viewsVistasScore: integer('views_vistas_score').notNull(),
    waterScore: integer('water_score').notNull(),
  }
)
