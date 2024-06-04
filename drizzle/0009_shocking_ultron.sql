ALTER TABLE "reports" ADD COLUMN "reportName" text NOT NULL;--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "animals_score";--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "fire_score";--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "inside_outside_score";--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "natural_light_score";--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "natural_materials_score";--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "plants_score";--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "views_vistas_score";--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "water_score";