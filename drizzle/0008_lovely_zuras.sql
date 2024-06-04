ALTER TABLE "reports" ADD COLUMN "clerk_user_id" varchar NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reports" ADD CONSTRAINT "reports_clerk_user_id_users_clerk_id_fk" FOREIGN KEY ("clerk_user_id") REFERENCES "users"("clerk_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "reports" ADD CONSTRAINT "reports_clerk_user_id_unique" UNIQUE("clerk_user_id");