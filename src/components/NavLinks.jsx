import styles from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { NAV_LINKS } from "../data/link-routes";
import { useUserData } from "../context/UserContext";
import { useTranslation } from "react-i18next";

export default function NavLinks() {
  const { t } = useTranslation("home");
  const { token } = useAuth();
  const { userData, loading } = useUserData();

  return (
    <div className={styles["nav-links"]}>
      <ul className={styles["nav-links-ul"]}>
        {NAV_LINKS.map((link, index) => {
          return (
            <li key={index}>
              <NavLink key={index * 2} to={`${link.href}`}>
                {t(`navbar.${link.content}`)}
              </NavLink>
            </li>
          );
        })}

        <li className={styles["nav-reservation-li"]}>
          <NavLink
            className={`${styles["nav-reservation-link"]} ${styles["no-hover"]}`}
          >
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
              // to="/sign-in"
            >
              {t("navbar.primeClub")}
            </NavLink>
          ) : (
            <NavLink
              id="prime-club-btn"
              // to="/profile"
            >
              <img src="../assets/user.png" alt="profile-pic" width="26px" />
              <span>{loading ? "Guest" : userData?.name || ""}</span>
            </NavLink>
          )}
        </li>
        <li className="nav-lang-li">
          <NavLink
            href="#"
            className={`${styles["nav-lang-link"]} ${styles["no-hover"]}`}
          >
            <img
              src={`../assets/icons/${t("navbar.langImg")}`}
              alt="arabic-language-img"
            />
            {t("navbar.lang")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
