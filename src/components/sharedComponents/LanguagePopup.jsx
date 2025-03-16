import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../../styles/SharedComponentsStyles/popup.module.css";
export default function LanguagePopup() {
  const { setLanguageSettings } = useLanguage();
  const [showPopup, setShowPopup] = useState(!localStorage.getItem("language"));

  const handleSelectLanguage = (lang) => {
    setLanguageSettings(lang);
    setShowPopup(false);
  };

  if (!showPopup) return null;
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
