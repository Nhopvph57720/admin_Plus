import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './en.json';
import vi from './vi.json';

const resources = {
  en: { translation: en },
  vi: { translation: vi },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    try {
      const locale = Localization.locale;
      // ✅ Kiểm tra null để tránh lỗi
      const language = locale ? locale.split('-')[0] : 'en';
      callback(language === 'vi' ? 'vi' : 'en');
    } catch (error) {
      console.warn('Error detecting language:', error);
      callback('en'); // fallback
    }
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'vi',
    interpolation: { escapeValue: false },
  });

export default i18n;
