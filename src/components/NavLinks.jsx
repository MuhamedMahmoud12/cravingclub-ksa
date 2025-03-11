import styles from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useUserData } from "../context/UserContext";
import { useTranslation } from "react-i18next";

export default function NavLinks() {
  const { t } = useTranslation("home");
  const navLinks = Object.entries(t(`navbarLinks`, { returnObjects: true }));
  const navLinks2 = t(`navbarLinks2`, { returnObjects: true });

  const { token } = useAuth();
  const { userData, loading } = useUserData();
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
          {!token ? (
            <NavLink
              className={`${styles["nav-primeclub-link"]} ${styles["no-hover"]}`}
              id="prime-club-btn"
              // to={navLinks2[2].path}
            >
              {navLinks2[2].primeClub}
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
              src={`../assets/icons/${navLinks2[3].arIcon}`}
              alt="arabic-language-img"
            />
            {navLinks2[4].lang}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
