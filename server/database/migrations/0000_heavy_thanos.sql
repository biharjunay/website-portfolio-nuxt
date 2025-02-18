CREATE TABLE "achievements" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"year" integer NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "certifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"year_start" integer NOT NULL,
	"year_end" integer NOT NULL,
	"credentials" text,
	"certificate_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "educations" (
	"id" serial PRIMARY KEY NOT NULL,
	"major" text NOT NULL,
	"education_name" text NOT NULL,
	"month_start" integer NOT NULL,
	"month_end" integer NOT NULL,
	"year_start" integer NOT NULL,
	"year_end" integer NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"office_name" text NOT NULL,
	"month_start" integer NOT NULL,
	"month_end" integer NOT NULL,
	"year_start" integer NOT NULL,
	"year_end" integer NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "portfolio" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"project_url" text,
	"available_on" text,
	"tech_stack" text,
	"image_url" text
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" text NOT NULL,
	"position" text NOT NULL,
	"description" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
