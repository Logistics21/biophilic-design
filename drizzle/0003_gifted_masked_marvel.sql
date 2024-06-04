ALTER TABLE "reports" RENAME COLUMN "user_id" TO "clerk_user_id";--> statement-breakpoint
ALTER TABLE "reports" DROP CONSTRAINT "reports_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "reports" ALTER COLUMN "clerk_user_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "clerk_user_id" varchar NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reports" ADD CONSTRAINT "reports_clerk_user_id_users_clerk_user_id_fk" FOREIGN KEY ("clerk_user_id") REFERENCES "users"("clerk_user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_clerk_user_id_unique" UNIQUE("clerk_user_id");