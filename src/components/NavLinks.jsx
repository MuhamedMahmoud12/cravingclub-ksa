import styles from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
export default function NavLinks() {
  const { t } = useTranslation("home");
  const navLinks = Object.entries(t(`navbarLinks`, { returnObjects: true }));
  const navLinks2 = t(`navbarLinks2`, { returnObjects: true });
  const { language, setLanguageSettings } = useLanguage();

  return (
    <div className={styles["nav-links"]}>
      <ul className={styles["nav-links-ul"]}>
        {navLinks.map(([key, value]) => {
          return (
            <li key={key}>
              <NavLink to={value.path}>{value.content}</NavLink>
            </li>
          );
        })}

        <li className={styles["nav-reservation-li"]}>
          <NavLink
            className={`${styles["nav-reservation-link"]} ${styles["no-hover"]}`}
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
            }
          }}
        >
          <img
            src={`../assets/icons/${navLinks2[3].langIcon}`}
            alt="arabic-language-img"
          />
          {navLinks2[4].lang}
        </li>
      </ul>
    </div>
  );
}
