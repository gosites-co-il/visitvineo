export const attractionActivities = [
	{
		id: 'waterfalls',
		slug: 'waterfalls',
		image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900&q=80',
	},
	{
		id: 'iguana',
		slug: 'iguana',
		image: 'https://images.unsplash.com/photo-1559127772-0f4f7a7e5b8a?w=900&q=80',
	},
	{
		id: 'fishing',
		slug: 'fishing',
		image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80',
	},
	{
		id: 'horses',
		slug: 'horses',
		image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=900&q=80',
	},
] as const;

export type AttractionId = (typeof attractionActivities)[number]['id'];

export function getAttractionBySlug(slug: string): { id: AttractionId; image: string } | null {
	const activity = attractionActivities.find((item) => item.slug === slug);
	if (!activity) return null;
	return { id: activity.id, image: activity.image };
}

export const allAttractionSlugs = attractionActivities.map((item) => item.slug);
