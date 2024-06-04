CREATE TABLE IF NOT EXISTS "reports" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"air_score" integer NOT NULL,
	"animals_score" integer NOT NULL,
	"fire_score" integer NOT NULL,
	"inside_outside_score" integer NOT NULL,
	"natural_light_score" integer NOT NULL,
	"natural_materials_score" integer NOT NULL,
	"plants_score" integer NOT NULL,
	"views_vistas_score" integer NOT NULL,
	"water_score" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reports" ADD CONSTRAINT "reports_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
