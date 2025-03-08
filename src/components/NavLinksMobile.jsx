import styles from "../styles/Header.module.css";
import { NAV_LINKS } from "../data/link-routes";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
export default function NavLinksMobile() {
  const { t } = useTranslation("home");
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { token } = useAuth();
  useEffect(() => {
    setIsVisible(false);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsVisible(false);
  };
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
          {NAV_LINKS.map((link, index) => {
            return (
              <li key={index * 2}>
                <NavLink to={`${link.href}`} onClick={handleLinkClick}>
                  {t(`navbar.${link.content}`)}
                </NavLink>
              </li>
            );
          })}
          <li className={styles["nav-reservation-li"]}>
            <NavLink className={styles["nav-reservation-link"]}>
              <span className={styles["nav-reservation-span"]}>
                {t("navbar.reservation")}:
              </span>
              +966 54 210 7964
            </NavLink>
          </li>
          <li className={styles["nav-primeclub-li"]}>
            {!token ? (
              <NavLink
                className={`${styles["nav-primeclub-link"]} ${styles["no-hover"]}`}
                id="prime-club-btn"
                // to="/sign-up"
              >
                {t("navbar.primeClub")}
              </NavLink>
            ) : (
              <NavLink
                className={`${styles["nav-primeclub-link"]} ${styles["no-hover"]}`}
                id="prime-club-btn"
                // to="/profile"
              >
                Profile
              </NavLink>
            )}
          </li>
          <li className={styles["nav-lang-li"]}>
            <NavLink href="#" className={styles["nav-lang-link"]}>
              {t("navbar.changeLang")} : &nbsp;
              <img
                src={`../assets/icons/${t("navbar.langImg")}`}
                alt="arabic-language-img"
              />
              {t("navbar.lang")}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
