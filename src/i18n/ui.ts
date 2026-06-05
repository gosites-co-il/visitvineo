import en from './en.json';
import he from './he.json';

export const languages = {
	en: 'English',
	he: 'עברית',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'he';
export const rtlLocales = new Set<Lang>(['he']);

const ui = { en, he } as const;

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: string): string {
		const keys = key.split('.');
		let value: unknown = ui[lang];

		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = (value as Record<string, unknown>)[k];
			} else {
				return key;
			}
		}

		return typeof value === 'string' ? value : key;
	};
}

export function useTranslatedPath(lang: Lang) {
	return function translatePath(path: string, targetLang: Lang = lang): string {
		const normalized = path.startsWith('/') ? path : `/${path}`;
		if (targetLang === defaultLang) return normalized;
		return normalized === '/' ? `/${targetLang}/` : `/${targetLang}${normalized}`;
	};
}

export function getAlternateUrl(path: string, currentLang: Lang, site: string): string {
	const otherLang: Lang = currentLang === 'en' ? 'he' : 'en';
	const translatePath = useTranslatedPath(currentLang);
	return new URL(translatePath(path, otherLang), site).href;
}

export function getNavLinks(lang: Lang) {
	const t = useTranslations(lang);
	const translatePath = useTranslatedPath(lang);

	return [
		{ label: t('nav.surf'), href: translatePath('/surf') },
		{ label: t('nav.attractions'), href: translatePath('/attractions') },
		{ label: t('nav.lodging'), href: translatePath('/lodging') },
		{ label: t('nav.culinary'), href: translatePath('/culinary') },
		{ label: t('nav.packages'), href: translatePath('/packages') },
		{ label: t('nav.events'), href: translatePath('/events') },
		{ label: t('nav.about'), href: translatePath('/about') },
		{ label: t('nav.contact'), href: translatePath('/contact') },
	];
}

export function isRtl(lang: Lang): boolean {
	return rtlLocales.has(lang);
}
