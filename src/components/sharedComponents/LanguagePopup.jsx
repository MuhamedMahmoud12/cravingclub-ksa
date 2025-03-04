/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../../styles/SharedComponentsStyles/popup.module.css";
export default function LanguagePopup({ onClose, changeLanguage }) {
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("language") || "en"
  );

  const handleSelectLanguage = (lang) => {
    setSelectedLang(lang);
    localStorage.setItem("language", lang); // ✅ نحفظ اللغة في LocalStorage
    changeLanguage(lang); // ✅ نبعت التحديث للـ Layout
    onClose(); // ✅ نقفل البوب أب
  };

  return (
    <div className={styles["popup"]}>
      <div>
        <h3>Choose Language</h3>
        <h3 style={{ fontFamily: "Cairo, serif" }}>اختر اللغة</h3>
        <button
          style={{ fontFamily: "Cairo, serif" }}
          onClick={() => handleSelectLanguage("ar")}
        >
          العربية
        </button>
        <button
          style={{ fontFamily: "Bebas Neue, serif" }}
          onClick={() => handleSelectLanguage("en")}
        >
          English
        </button>
      </div>
    </div>
  );
}
