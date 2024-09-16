import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './common/locales/en/translation.json';
import translationZH from './common/locales/zh/translation.json';

export const defaultNS = 'translation';

export const resources = {
    en: {
        translation: translationEN
    },
    zh: {
        translation: translationZH
    }
};

i18n.use(LanguageDetector) // 自动检测用户语言
    .use(initReactI18next) // 启用 react-i18next
    .init({
        resources, // 直接导入翻译资源
        fallbackLng: 'en', // 默认语言
        ns: ['translation'], // 命名空间
        defaultNS,
        interpolation: {
            escapeValue: false // React 默认已转义
        }
    });

export default i18n;
