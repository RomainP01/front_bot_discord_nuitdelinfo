import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translation/en";
import frTranslations from "./translation/fr";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translation: {
          ...enTranslations,
        },
      },
      fr: {
        translation: {
          ...frTranslations,
        },
      },
    },
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;
