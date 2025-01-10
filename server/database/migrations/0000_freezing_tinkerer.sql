CREATE TABLE `achievements` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`year` integer NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `certifications` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`year_start` integer NOT NULL,
	`year_end` integer NOT NULL,
	`credentials` text,
	`certificate_url` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `educations` (
	`id` integer PRIMARY KEY NOT NULL,
	`major` text NOT NULL,
	`education_name` text NOT NULL,
	`month_start` integer NOT NULL,
	`month_end` integer NOT NULL,
	`year_start` integer NOT NULL,
	`year_end` integer NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `experiences` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`office_name` text NOT NULL,
	`month_start` integer NOT NULL,
	`month_end` integer NOT NULL,
	`year_start` integer NOT NULL,
	`year_end` integer NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `heroes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`avatar` text,
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `heroes_email_unique` ON `heroes` (`email`);--> statement-breakpoint
CREATE TABLE `portfolio` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`project_url` text,
	`available_on` text,
	`tech_stack` text,
	`iamge_url` text
);
