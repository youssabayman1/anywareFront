// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      announcements: 'Announcements',
      loading: 'Loading...',
      noAnnouncements: 'No announcements found.',
    },
  },
  ar: {
    translation: {
      announcements: 'الإعلانات',
      loading: 'جاري التحميل...',
      noAnnouncements: 'لا توجد إعلانات.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Change to 'ar' for Arabic
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
