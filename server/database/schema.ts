// import { pgTable, text, integer } from 'drizzle-orm/sqlite-core'
import { pgTable, integer, text } from "drizzle-orm/pg-core"

export const heroes = pgTable('heroes', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  avatar: text('avatar'),
  description: text('description')
})

export const portfolios = pgTable('portfolio', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  projectUrl: text('project_url'),
  availableOn: text('available_on'),
  techStack: text('tech_stack'),
  imageUrl: text('image_url')
})

export const educations = pgTable('educations', {
  id: integer('id').primaryKey(),
  major: text('major').notNull(),
  educationName: text('education_name').notNull(),
  monthStart: integer('month_start').notNull(),
  monthEnd: integer('month_end').notNull(),
  yearStart: integer('year_start').notNull(),
  yearEnd: integer('year_end').notNull(),
  description: text('description')
})

export const experiences = pgTable('experiences', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  officeName: text('office_name').notNull(),
  monthStart: integer('month_start').notNull(),
  monthEnd: integer('month_end').notNull(),
  yearStart: integer('year_start').notNull(),
  yearEnd: integer('year_end').notNull(),
  description: text('description')
})

export const certifications = pgTable('certifications', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  yearStart: integer('year_start').notNull(),
  yearEnd: integer('year_end').notNull(),
  credentials: text('credentials'),
  certificateUrl: text('certificate_url').notNull()
})

export const achievements = pgTable('achievements', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  year: integer('year').notNull(),
  description: text('description')
})
