import {pgTable, integer, text, serial} from "drizzle-orm/pg-core"

export const heroes = pgTable('heroes', {
    id: serial('id').primaryKey(),
    key: text('key').notNull(),
    value: text('key').notNull(),
})

export const portfolios = pgTable('portfolio', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    projectUrl: text('project_url'),
    availableOn: text('available_on'),
    techStack: text('tech_stack'),
    imageUrl: text('image_url')
})

export const educations = pgTable('educations', {
    id: serial('id').primaryKey(),
    major: text('major').notNull(),
    educationName: text('education_name').notNull(),
    monthStart: integer('month_start').notNull(),
    monthEnd: integer('month_end').notNull(),
    yearStart: integer('year_start').notNull(),
    yearEnd: integer('year_end').notNull(),
    description: text('description')
})

export const experiences = pgTable('experiences', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    officeName: text('office_name').notNull(),
    monthStart: integer('month_start').notNull(),
    monthEnd: integer('month_end').notNull(),
    yearStart: integer('year_start').notNull(),
    yearEnd: integer('year_end').notNull(),
    description: text('description')
})

export const certifications = pgTable('certifications', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    yearStart: integer('year_start').notNull(),
    yearEnd: integer('year_end').notNull(),
    credentials: text('credentials'),
    certificateUrl: text('certificate_url').notNull()
})

export const achievements = pgTable('achievements', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    year: integer('year').notNull(),
    description: text('description')
})
