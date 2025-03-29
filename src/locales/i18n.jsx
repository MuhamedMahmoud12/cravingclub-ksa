import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HomeEn from "./en/Home.json";
import HomeAr from "./ar/Home.json";
import MenuAr from "./ar/Menu.json";
import MenuEn from "./en/Menu.json";
import ContactEn from "./en/Contact.json";
import ContactAr from "./ar/Contact.json";
import SpinAr from "./ar/Spin.json";
import SpinEn from "./en/Spin.json";
const resources = {
  en: {
    home: HomeEn,
    menu: MenuEn,
    contact: ContactEn,
    spin: SpinEn,
  },
  ar: {
    home: HomeAr,
    menu: MenuAr,
    contact: ContactAr,
    spin: SpinAr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en", // استخدم اللغة المخزنة أو اجعلها افتراضيًا "en"
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
