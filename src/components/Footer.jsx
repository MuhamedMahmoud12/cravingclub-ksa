import footer from "../styles/footer.module.css";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation("home");
  return (
    <footer>
      <div className="container">
        <div className={footer["location"]}>
          <div>
            <p>
              <span className={footer["branch"]}>
                {t("footer.firstBranch")}
              </span>
              {t("footer.firstAddress")}
              <br />
              <span className={footer["branch"]}>
                {t("footer.secondBranch")}
              </span>
              {t("footer.secondAddress")}
            </p>
            <a href="#">{t("footer.getDirection")}</a>
          </div>
          <div>
            <span className={footer["times"]}>{t("footer.openingTimes")}</span>
            <span className={footer["times"]}>{t("footer.openingTimes2")}</span>
          </div>
        </div>
        <div className={footer["prime-links"]}>
          <div className={footer["prime-club-section"]}>
            <h2>{t("footer.primeClubTitle")}</h2>
            <p>{t("footer.primeClubDesc")}</p>
            <a href="#">{t("footer.primeClubBtn")}</a>
          </div>
          <div className={footer["social-links-section"]}>
            <ul>
              <li>
                <a href="#">{t("footer.facebook")}</a>
              </li>
              <li>
                <a href="#">{t("footer.instagram")}</a>
              </li>
              <li>
                <a href="#">{t("footer.snapchat")}</a>
              </li>
              <li>
                <a href="#">{t("footer.tiktok")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={footer["footer-nav-links"]}>
          <ul>
            <li>
              <a href="#">
                {t("footer.footerlinks", { returnObjects: true })[0]}
              </a>
            </li>
            <li>
              <a href="#">
                {t("footer.footerlinks", { returnObjects: true })[1]}
              </a>
            </li>
            <li>
              <a href="#">
                {t("footer.footerlinks", { returnObjects: true })[2]}
              </a>
            </li>
            <li>
              <a href="#">
                {t("footer.footerlinks", { returnObjects: true })[3]}
              </a>
            </li>
            <li>
              <a href="#">
                {t("footer.footerlinks", { returnObjects: true })[4]}
              </a>
            </li>
            <li>
              <a href="#">
                {t("footer.footerlinks", { returnObjects: true })[5]}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={footer["copyrights"]}>
        <p>{t("footer.copyRight")}</p>
      </div>
    </footer>
  );
}
