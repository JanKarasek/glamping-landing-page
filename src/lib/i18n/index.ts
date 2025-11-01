import { writable, derived } from 'svelte/store';
import cs from './cs.json';
import de from './de.json';

export const locales = { cs, de };

const initialLocale = typeof navigator !== 'undefined' && navigator.language.split('-')[0] === 'de' ? 'de' : 'cs';

export const locale = writable<'cs' | 'de'>(initialLocale);

export function setLocale(lang: 'cs' | 'de') {
    locale.set(lang);
}

export const t = derived(locale, ($locale) => (key: string) => {
    const keys = key.split('.');
    let text = locales[$locale] as any;
    for (const k of keys) {
        if (text && typeof text === 'object' && k in text) {
            text = text[k];
        } else {
            return key;
        }
    }
    return text;
});