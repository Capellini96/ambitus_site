import i18n from "i18next";
import Backend from "i18next-xhr-backend";
// import { reactI18nextModule } from "react-i18next";
import { initReactI18next } from "react-i18next";
// import detector from "i18next-browser-languagedetector";
import LanguageDetector from "i18next-browser-languagedetector";



// translations are already at
// '../public/locales/en/translation.json'   querystring (append ?lng=LANGUAGE to URL)
// which is the default for the xhr backend to load from
const Languages = ["en_us","pt_br"];
i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en_us", // use en if detected lng is not available
    defaultNS: "locale",
    ns: "locale",
    debug: true,
    whitelist: Languages,
    keySeparator: false, // we do not use keys in form messages.welcome
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json?validate=3`
      // loadPath: `${window.location.pathname}locales/{{lng}}/{{lng}}.json`
    },

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    // react-i18next options
    react: {
      wait: true
    }
  });

// export default i18n.t.bind(i18n);
export default i18n;