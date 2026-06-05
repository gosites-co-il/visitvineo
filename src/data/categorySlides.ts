export type Category = 'surf' | 'fishing' | 'jeep' | 'horse' | 'lodging';

export const categoryGradients: Record<Category, string[]> = {
	surf: [
		'linear-gradient(135deg, #1a3a4a 0%, #5b8fa8 100%)',
		'linear-gradient(135deg, #2a4a5a 0%, #8fa68a 100%)',
		'linear-gradient(135deg, #3a5a4a 0%, #e8a84c 100%)',
	],
	fishing: [
		'linear-gradient(135deg, #1a2a3a 0%, #5b8fa8 100%)',
		'linear-gradient(135deg, #2a3a4a 0%, #e8a84c 100%)',
		'linear-gradient(135deg, #1a3a3a 0%, #8fa68a 100%)',
	],
	jeep: [
		'linear-gradient(135deg, #3a3a2a 0%, #8fa68a 100%)',
		'linear-gradient(135deg, #4a3a2a 0%, #e8a84c 100%)',
		'linear-gradient(135deg, #2a3a2a 0%, #5b8fa8 100%)',
	],
	horse: [
		'linear-gradient(135deg, #4a3a2a 0%, #c4b5c9 100%)',
		'linear-gradient(135deg, #3a4a3a 0%, #8fa68a 100%)',
		'linear-gradient(135deg, #5a4a3a 0%, #e8a84c 100%)',
	],
	lodging: [
		'linear-gradient(135deg, #4a5a4a 0%, #8fa68a 100%)',
		'linear-gradient(135deg, #2a4a5a 0%, #5b8fa8 100%)',
		'linear-gradient(135deg, #5a4a5a 0%, #c4b5c9 100%)',
	],
};

export const categorySlideCount = 3;
