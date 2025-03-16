/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useState, createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../locales/i18n.jsx";
const LanguageContext = createContext();

export const LanguageProiver = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const setLanguageSettings = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.style.setProperty(
      "--font-bebas",
      lang === "ar" ? "Cairo, sans-serif" : "Bebas Neue, serif"
    );
    document.documentElement.style.setProperty(
      "--font-roboto",
      lang === "ar" ? "Cairo, sans-serif" : "Roboto, serif"
    );
    document.documentElement.style.setProperty(
      "--font-playball",
      lang === "ar" ? "Cairo, sans-serif" : "Playball, serif"
    );
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr"
    );
    document.documentElement.lang = i18n.language;
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    setLanguageSettings(language);
  }, []);
  return (
    <LanguageContext.Provider value={{ language, setLanguageSettings }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
