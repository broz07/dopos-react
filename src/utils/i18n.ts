// i18n.ts
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enTranslations from '@dopos/locales/en.json';
import deTranslations from '@dopos/locales/de.json';
import csTranslations from '@dopos/locales/cs.json';

i18n.use(initReactI18next).init({
	resources: {
		cs: {
			translation: csTranslations,
		},
		en: {
			translation: enTranslations,
		},
		de: {
			translation: deTranslations,
		},
	},
	lng: 'cs', // Set the default language
	fallbackLng: 'cs',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
