ALTER TABLE "users" RENAME COLUMN "clerk_user_id" TO "clerk_id";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_clerk_user_id_unique";--> statement-breakpoint
ALTER TABLE "reports" DROP CONSTRAINT "reports_clerk_user_id_users_clerk_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reports" ADD CONSTRAINT "reports_clerk_user_id_users_clerk_id_fk" FOREIGN KEY ("clerk_user_id") REFERENCES "users"("clerk_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id");