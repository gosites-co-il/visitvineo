export const playaVenaoBlocks = [
	{
		id: 'welcome',
		image: 'https://images.unsplash.com/photo-1544551763-77ef2d996a96?w=900&q=80',
		showTitle: false,
	},
	{
		id: 'atmosphere',
		image: 'https://images.unsplash.com/photo-1502680390468-be998c1370d7?w=900&q=80',
		showTitle: true,
	},
	{
		id: 'nomads',
		image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
		showTitle: true,
		listKeys: ['coworking', 'community', 'lodging'] as const,
	},
	{
		id: 'weather',
		image: 'https://images.unsplash.com/photo-1473496169134-9ff9806bae88?w=900&q=80',
		showTitle: true,
		listKeys: ['drySeason', 'greenSeason'] as const,
	},
	{
		id: 'culinary',
		image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80',
		showTitle: true,
	},
] as const;

export type PlayaVenaoBlockId = (typeof playaVenaoBlocks)[number]['id'];
