import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import nav from "./en/nav.json";
i18n.use(initReactI18next).init({
  fallbackLng: "en",
  ns: ["nav"],
  resources: {
    en: {
      nav,
    },
  },
});

export default i18n;
