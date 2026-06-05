export const vacationPackages = [
	{
		id: 'surfWellness',
		slug: 'surf-wellness',
		image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80',
	},
	{
		id: 'surfPackage',
		slug: 'surf-package',
		image: 'https://images.unsplash.com/photo-1502680390468-be998c1370d7?w=900&q=80',
	},
	{
		id: 'full',
		slug: 'full-experience',
		image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80',
	},
	{
		id: 'venao',
		slug: 'venao-experience',
		image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
	},
	{
		id: 'basic',
		slug: 'basic-escape',
		image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
	},
] as const;

export type PackageId = (typeof vacationPackages)[number]['id'];

export const packageIncludes: Record<PackageId, readonly string[]> = {
	surfWellness: ['lodging', 'surfLessons', 'yoga', 'recovery', 'coworking'],
	surfPackage: ['lodging', 'course', 'equipment', 'video', 'community'],
	full: ['flights', 'lodging', 'attractions', 'surf', 'culinary'],
	venao: ['shuttle', 'lodging', 'activities', 'surf'],
	basic: ['shuttle', 'lodging', 'activities', 'flexible'],
};

export function getPackageBySlug(slug: string): { id: PackageId; image: string } | null {
	const pkg = vacationPackages.find((item) => item.slug === slug);
	if (!pkg) return null;
	return { id: pkg.id, image: pkg.image };
}

export const allPackageSlugs = vacationPackages.map((item) => item.slug);
