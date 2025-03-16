import { Outlet } from "react-router-dom";
import { LanguageProiver } from "../context/LanguageContext.jsx";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguagePopup from "../components/sharedComponents/LanguagePopup.jsx";
// import "../locales/i18n.jsx";
// import { useTranslation } from "react-i18next";
// import { useEffect } from "react";
export default function Layout() {
  // const { i18n } = useTranslation();
  // useEffect(() => {
  //   const savedLanguage = localStorage.getItem("language") || "en";
  //   i18n.changeLanguage(savedLanguage);

  //   document.documentElement.lang = savedLanguage;
  //   document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  //   document.documentElement.style.setProperty(
  //     "--font-bebas",
  //     savedLanguage === "ar" ? "Cairo, sans-serif" : "Bebas Neue, serif"
  //   );
  //   document.documentElement.style.setProperty(
  //     "--font-roboto",
  //     savedLanguage === "ar" ? "Cairo, sans-serif" : "Roboto, serif"
  //   );
  //   document.documentElement.style.setProperty(
  //     "--font-playball",
  //     savedLanguage === "ar" ? "Cairo, sans-serif" : "Playball, serif"
  //   );
  //   document.documentElement.setAttribute(
  //     "dir",
  //     i18n.language === "ar" ? "rtl" : "ltr"
  //   );
  // }, []);
  return (
    <LanguageProiver>
      <div className="layout">
        <LanguagePopup />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </LanguageProiver>
  );
}
