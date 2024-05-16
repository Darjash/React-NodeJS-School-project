import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import est from './languages/est.json';
import ru from './languages/rus.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      est: { translation: est },
      ru: { translation: ru }
    },
    lng: 'est',
    fallbackLng: 'est',
  });

export default i18n;
