// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const heroSchema = z.object({
	badges: z
		.array(
			z.object({
				name: z.string(),
				value: z.union([z.string(), z.boolean(), z.number()]),
			})
		)
		.optional(),

	headline: z.object({
		defaultColorText: z.string(),
		altColorText: z.string(),
	}),

	backgroundImage: z.object({
		src: z.string(),
		alt: z.string(),
	}),

	actions: z.array(
		z.object({
			variant: z.enum(['primary', 'secondary', 'tertiary']),
			text: z.string(),
			href: z.string(),
			icon: z.string().optional(),
		})
	),

	stats: z.array(
		z.object({
			name: z.string(),
			value: z.union([z.string(), z.boolean(), z.number()]),
			icon: z.string().optional(),
		})
	),
});

const aboutSchema = defineCollection({
	/* ... */
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { heroSchema, aboutSchema };
