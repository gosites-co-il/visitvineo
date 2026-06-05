export const eventCategories = [
	{
		id: 'weddings',
		slug: 'weddings',
		image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
	},
	{
		id: 'privateParties',
		slug: 'private-parties',
		image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
	},
	{
		id: 'corporate',
		slug: 'corporate',
		image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
	},
	{
		id: 'honeymoon',
		slug: 'honeymoon',
		image: 'https://images.unsplash.com/photo-1522673607200-164d1b6fc486?w=800&q=80',
	},
] as const;

export const eventRetreats = [
	{
		id: 'wellness',
		slug: 'wellness-retreats',
		image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
	},
	{
		id: 'surf',
		slug: 'surf-retreats',
		image: 'https://images.unsplash.com/photo-1502680390468-be998c1370d7?w=800&q=80',
	},
] as const;

export type EventCategoryId = (typeof eventCategories)[number]['id'];
export type EventRetreatId = (typeof eventRetreats)[number]['id'];
export type EventDetailId = EventCategoryId | EventRetreatId;

export const eventServiceKeys = [
	'planning',
	'lodging',
	'transport',
	'culinary',
	'vendors',
	'management',
] as const;

export function getEventBySlug(slug: string): { eventId: EventDetailId; image: string } | null {
	const category = eventCategories.find((item) => item.slug === slug);
	if (category) return { eventId: category.id, image: category.image };

	const retreat = eventRetreats.find((item) => item.slug === slug);
	if (retreat) return { eventId: retreat.id, image: retreat.image };

	return null;
}

export const allEventSlugs = [
	...eventCategories.map((item) => item.slug),
	...eventRetreats.map((item) => item.slug),
] as const;

export const eventDetailIncludes: Record<EventDetailId, readonly string[]> = {
	weddings: ['concept', 'venues', 'lodging', 'catering', 'music', 'boats', 'beachParties', 'photo', 'activities'],
	privateParties: ['villas', 'boats', 'sunsetParties', 'privateDining', 'fishing', 'attractions'],
	corporate: ['coworking', 'lodging', 'catering', 'teamBuilding', 'surf', 'nature', 'wellness', 'talks', 'beachParties'],
	honeymoon: ['villas', 'romanticDining', 'sunsetBoats', 'massage', 'waterfalls', 'surfLessons', 'custom'],
	wellness: ['yoga', 'meditation', 'iceBath', 'nutrition', 'treatments', 'surf', 'nature', 'rest', 'coworking', 'community'],
	surf: ['lessons', 'video', 'technique', 'photo', 'yoga', 'recovery', 'nutrition', 'nature', 'community'],
};
