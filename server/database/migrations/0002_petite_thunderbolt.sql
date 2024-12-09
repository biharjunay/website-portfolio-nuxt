CREATE TABLE `achievements` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`title` text NOT NULL,
	`year` integer NOT NULL,
	`description` text,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `certifications` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`title` text NOT NULL,
	`year_start` integer NOT NULL,
	`year_end` integer NOT NULL,
	`credentials` text,
	`certificate_url` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `educations` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`name` text NOT NULL,
	`education_name` text NOT NULL,
	`month_start` integer NOT NULL,
	`month_end` integer NOT NULL,
	`year_start` integer NOT NULL,
	`year_end` integer NOT NULL,
	`description` text,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `experiences` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`name` text NOT NULL,
	`office_name` text NOT NULL,
	`month_start` integer NOT NULL,
	`month_end` integer NOT NULL,
	`year_start` integer NOT NULL,
	`year_end` integer NOT NULL,
	`description` text,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `portfolio` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`title` integer NOT NULL,
	`description` text,
	`project_url` text,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`avatar` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);