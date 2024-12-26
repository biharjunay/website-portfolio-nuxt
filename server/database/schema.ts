import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  avatar: text('avatar').notNull(),
  description: text('description')
})

export const portfolios = sqliteTable('portfolio', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  title: integer('title').notNull(),
  description: text('description'),
  projectUrl: text('project_url'),
  availableOn: text('available_on')
})

export const educations = sqliteTable('educations', {
  id: integer('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  name: text('name').notNull(),
  educationName: text('education_name').notNull(),
  monthStart: integer('month_start').notNull(),
  monthEnd: integer('month_end').notNull(),
  yearStart: integer('year_start').notNull(),
  yearEnd: integer('year_end').notNull(),
  description: text('description')
})

export const experiences = sqliteTable('experiences', {
  id: integer('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  name: text('name').notNull(),
  office_name: text('office_name').notNull(),
  monthStart: integer('month_start').notNull(),
  monthEnd: integer('month_end').notNull(),
  yearStart: integer('year_start').notNull(),
  yearEnd: integer('year_end').notNull(),
  description: text('description')
})

export const certifications = sqliteTable('certifications', {
  id: integer('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  title: text('title').notNull(),
  yearStart: integer('year_start').notNull(),
  yearEnd: integer('year_end').notNull(),
  credentials: text('credentials'),
  certificateUrl: text('certificate_url').notNull()
})

export const achievements = sqliteTable('achievements', {
  id: integer('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  title: text('title').notNull(),
  year: integer('year').notNull(),
  description: text('description')
})
