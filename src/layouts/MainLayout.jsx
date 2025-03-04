/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguagePopup from "../components/sharedComponents/LanguagePopup.jsx";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "../locales/i18n.jsx";
export default function Layout() {
  const { t, i18n } = useTranslation("home");
  const [lang, setLang] = useState(localStorage.getItem("language") || "en");
  const [showPopup, setShowPopup] = useState(!localStorage.getItem("language")); // ✅ يظهر بس أول مرة

  useEffect(() => {
    i18n.changeLanguage(lang); // ✅ تغيير لغة الترجمة
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
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.lang = i18n.language;
  }, [lang]); // ✅ التحديث يحصل فورًا لما اللغة تتغير
  const changeLanguage = (newLang) => {
    localStorage.setItem("language", newLang);
    setLang(newLang); // ✅ تحديث اللغة فورًا من غير ريفرش
  };
  return (
    <div className="layout">
      {showPopup && (
        <LanguagePopup
          changeLanguage={changeLanguage}
          onClose={() => {
            setShowPopup(false);
          }}
        />
      )}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
