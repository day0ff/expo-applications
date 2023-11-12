import * as Localization from 'expo-localization';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en, ru } from "localization";

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: Localization.locale,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    compatibilityJSON: 'v3',
});

export default i18n;