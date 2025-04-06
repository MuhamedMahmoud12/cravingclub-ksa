import styles from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
export default function NavLinksMobile() {
  const { t } = useTranslation("home");
  const navLinks = Object.entries(t(`navbarLinks`, { returnObjects: true }));
  const navLinks2 = t(`navbarLinks2`, { returnObjects: true });
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { language, setLanguageSettings } = useLanguage();

  useEffect(() => {
    setIsVisible(false);
  }, [location.pathname]);

  return (
    <div className={`${styles["mobile-nav"]}`}>
      <div
        onClick={() => {
          setIsVisible((isVisible) => !isVisible);
        }}
        className={styles["mobile-nav-btn"]}
        id="mobile-nav-btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${styles["mobile-nav-links"]} ${
          isVisible ? styles.visible : ""
        } `}
        id="mobile-nav-links"
      >
        <ul className={styles["mobile-nav-links-ul"]}>
          {navLinks.map(([key, value]) => {
            return (
              <li key={key}>
                <NavLink to={value.path}>{value.content}</NavLink>
              </li>
            );
          })}
          <li className={styles["nav-reservation-li"]}>
            <NavLink
              className={styles["nav-reservation-link"]}
              to={navLinks2[0].path}
            >
              <span className={styles["nav-reservation-span"]}>
                {navLinks2[0].reservation}
              </span>
              {navLinks2[1].number}
            </NavLink>
          </li>
          <li className={styles["nav-primeclub-li"]}>
            <NavLink
              className={`${styles["nav-primeclub-link"]} ${styles["no-hover"]}`}
              id="prime-club-btn"
              // to={navLinks2[2].path}
            >
              {navLinks2[2].primeClub}
            </NavLink>
          </li>
          <li
            className={styles["nav-lang-li"]}
            onClick={() => {
              {
                language === "en"
                  ? setLanguageSettings("ar")
                  : setLanguageSettings("en");
                setIsVisible(false);
              }
            }}
          >
            {language === "ar" ? (
              <span style={{ fontFamily: "Bebas Neue, serif" }}>
                Change Language:{" "}
              </span>
            ) : (
              <span style={{ fontFamily: "Cairo, serif" }}>تغيير اللغه: </span>
            )}
            <img
              src={`../assets/icons/${navLinks2[3].langIcon}`}
              alt="lang-btn"
            />

            {navLinks2[4].lang}
          </li>
        </ul>
      </div>
    </div>
  );
}
