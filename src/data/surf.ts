export const surfProducts = [
	{
		id: 'retreat',
		slug: 'retreat',
		image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80',
	},
	{
		id: 'course',
		slug: 'course',
		image: 'https://images.unsplash.com/photo-1502680390468-be998c1370d7?w=900&q=80',
	},
	{
		id: 'rental',
		slug: 'rental',
		image: 'https://images.unsplash.com/photo-1528495618740-591c81ed3f1e?w=900&q=80&fit=crop&crop=center',
	},
] as const;

export function getSurfProductBySlug(slug: string): { id: SurfProductId; image: string } | null {
	const product = surfProducts.find((item) => item.slug === slug);
	if (!product) return null;
	return { id: product.id, image: product.image };
}

export const allSurfProductSlugs = surfProducts.map((item) => item.slug);

export type SurfProductId = (typeof surfProducts)[number]['id'];

export const surfHighlightKeys = ['yearRound', 'allLevels', 'schools', 'community'] as const;

export type SurfHighlightId = (typeof surfHighlightKeys)[number];

export const surfHighlights: ReadonlyArray<{
	id: SurfHighlightId;
	brandIcon: 'waves' | 'sun' | 'palm' | 'birds';
	iconAccent: 'blue' | 'orange' | 'sage' | 'lavender';
}> = [
	{ id: 'yearRound', brandIcon: 'waves', iconAccent: 'blue' },
	{ id: 'allLevels', brandIcon: 'sun', iconAccent: 'orange' },
	{ id: 'schools', brandIcon: 'palm', iconAccent: 'sage' },
	{ id: 'community', brandIcon: 'birds', iconAccent: 'lavender' },
];

export const surfProductIncludes: Record<SurfProductId, readonly string[]> = {
	retreat: ['lessons', 'photo', 'yoga', 'recovery', 'nutrition', 'nature'],
	course: ['private', 'theory', 'practice', 'boardFit', 'video'],
	rental: ['variety', 'swap', 'advice', 'maintenance'],
};
