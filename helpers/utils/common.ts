import dynamic from 'next/dynamic';

import { PostData } from '~/models';

export function getLocale() {
	if (typeof window !== 'undefined') {
		const locale = sessionStorage.getItem('locale');
		if (locale) {
			return locale;
		}
	}
	return process.env.NEXT_PUBLIC_LOCALE_DEFAULT;
}

export function getLang() {
	const locale = getLocale();

	try {
		return require(`~/configs/langs/${locale}.json`);
	} catch {
		return require(`~/configs/langs/${process.env.NEXT_PUBLIC_LOCALE_DEFAULT}.json`);
	}
}

export function createLinkPostDetail(post: PostData) {
	return post.type ? `/${post.type.data.slug}/${post.slug}-${post.id}.html` : post.slug;
}

export function isObjectEmpty(obj: {}) {
	return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
}
