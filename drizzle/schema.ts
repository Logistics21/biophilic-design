import { relations } from 'drizzle-orm';
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
    emailAddress: text('email').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    clerkId: varchar('clerk_id').notNull().unique(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.emailAddress),
    };
  },
);

export const ReportsTable = pgTable(
  'reports',
  {
    id: serial('id').primaryKey(),
    clerkUserId: varchar('clerk_user_id')
      .notNull()
      .references(() => UsersTable.clerkId),
    reportName: text('report_name').notNull(),
    airScore: integer('air_score').notNull(),
    animalsScore: integer('animals_score').notNull(),
    fireScore: integer('fire_score').notNull(),
    insideOutsideScore: integer('inside_outside_score').notNull(),
    naturaLightScore: integer('natural_light_score').notNull(),
    naturalMaterialsScore: integer('natural_materials_score').notNull(),
    plantsScore: integer('plants_score').notNull(),
    viewsVistasScore: integer('views_vistas_score').notNull(),
    waterScore: integer('water_score').notNull(),
    animalMotifsScore: integer('animal_motifs_score').notNull(),
    areaOfEmphasisScore: integer('area_of_emphasis_score').notNull(),
    biomimicryScore: integer('biomimicry_score').notNull(),
    botanicalMotifsScore: integer('botanical_motifs_score').notNull(),
    complementaryContrastsScore: integer('complementary_contrast_score').notNull(),
    compositionBalanceScore: integer('composition_balance_score').notNull(),
    movementScore: integer('movement_score').notNull(),
    natureBasedPatternsScore: integer('nature_based_patterns_score').notNull(),
    sensoryRichnessScore: integer('sensory_richness_score').notNull(),
    spatialVarietyScore: integer('spatial_variety_score').notNull(),
    warmLightScore: integer('warm_light_score').notNull(),
    culturalConnectionScore: integer('cultural_connection_score').notNull(),
    engagementScore: integer('engagement_score').notNull(),
    enticementAndDiscoveryScore: integer('enticement_and_discovery_score').notNull(),
    environmentalConnectionScore: integer('environmental_connection_score').notNull(),
    historicConnectionScore: integer('historic_connection_score').notNull(),
    prospectAndRefugeScore: integer('prospect_and_refuge_score').notNull(),
    spiritOfPlaceScore: integer('spirit_of_place_score').notNull(),
    stewardshipScore: integer('stewardship_score').notNull(),
  }
);

export const ReportsRelations = relations(ReportsTable, ({ one }) => ({
  user: one(UsersTable, { fields: [ReportsTable.clerkUserId], references: [UsersTable.clerkId] })
}));

export const UsersRelations = relations(UsersTable, ({ many }) => ({
  ReportsTable: many(ReportsTable),
}));
