import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
        ja: { translation: ja },
        ko: { translation: ko },
    },
    fallbackLng: "en",
    preload: ["en", "zh",'ko','ja'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
