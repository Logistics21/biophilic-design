ALTER TABLE "reports" DROP CONSTRAINT "reports_clerk_user_id_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_clerk_id_unique";--> statement-breakpoint
ALTER TABLE "reports" DROP CONSTRAINT "reports_clerk_user_id_users_clerk_id_fk";
--> statement-breakpoint
ALTER TABLE "reports" DROP COLUMN IF EXISTS "clerk_user_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "clerk_id";