// Importing Components
import MainSlider from "../components/homeComponents/MainSlider";
import AutoSlider from "../components/homeComponents/AutoSlider";
import AutoSliderItem from "../components/homeComponents/AutoSliderItem.jsx";
import AboutUs from "../components/homeComponents/AboutUs";
import Offers from "../components/homeComponents/Offers";
import WhoWeAre from "../components/homeComponents/WhoWeAre";
import Testimonials from "../components/homeComponents/Testimonials";
import SignIn from "../components/homeComponents/SignIn.jsx";
import MenuCategories from "../components/homeComponents/MenuCategories";
// Importing Styles
import home from "../styles/HomeStyles/Home.module.css";
import aboutUs from "../styles/HomeStyles/aboutUs.module.css";
import menuCategories from "../styles/HomeStyles/menuCategories.module.css";
import offers from "../styles/HomeStyles/offers.module.css";
import mainSlider from "../styles/HomeStyles/MainSlider.module.css";
import styles from "../styles/HomeStyles/MainSlider.module.css";
// Auto Slider Options
import SLIDER_OPTIONS from "../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../data/autoSliderTitles";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation("home");
  const sliderSideLinks = t(`sliderSideLinks`, { returnObjects: true });
  console.log(sliderSideLinks);

  return (
    <>
      <section className={home["slider-section"]}>
        <div className={home["left-side-div"]}>
          <ul>
            <li>
              <a href="#">{sliderSideLinks.socialMedia.facebook}</a>
            </li>
            <li>
              <a href="#">{sliderSideLinks.socialMedia.instagram}</a>
            </li>
            <li>
              <a href="#">{sliderSideLinks.socialMedia.snapchat}</a>
            </li>
            <li>
              <a href="#" className={home["last-link"]}>
                {sliderSideLinks.socialMedia.tiktok}
              </a>
            </li>
          </ul>
        </div>
        <div className={home["right-side-div"]}>
          <ul>
            <li>{sliderSideLinks.times.weekDays}</li>
            <li>{sliderSideLinks.times.weekEnd}</li>
          </ul>
        </div>
        <MainSlider>
          <div className={`${mainSlider["item"]} ${mainSlider["item1"]} item`}>
            <div className={styles.overlay}>
              <div className={styles["slider-content"]}>
                <span className={styles["prev-title-span"]}>
                  {t("mainSlider.welcome")}
                </span>
                <h2 className={styles["slider-title"]}>
                  {t("mainSlider.firstMsg")}
                </h2>
                <p className={styles["slider-paragraph"]}>
                  {t("mainSlider.slogan")}
                </p>
                <NavLink to="menu/appetizers" className={styles["slider-btn"]}>
                  {t("mainSlider.sliderBtn")}
                </NavLink>
              </div>
            </div>
          </div>
          <div className={`${mainSlider["item"]} ${mainSlider["item3"]} item`}>
            <div className={styles.overlay}>
              <div className={styles["slider-content"]}>
                <span className={styles["prev-title-span"]}>
                  {t("mainSlider.welcome")}
                </span>
                <h2 className={styles["slider-title"]}>
                  {t("mainSlider.secondMsg")}
                </h2>
                <p className={styles["slider-paragraph"]}>
                  {t("mainSlider.sloganTwo")}
                </p>
                <NavLink to="menu/appetizers" className={styles["slider-btn"]}>
                  {t("mainSlider.sliderBtn")}
                </NavLink>
              </div>
            </div>
          </div>
          <div className={`${mainSlider["item"]} ${mainSlider["item2"]} item`}>
            <div className={styles.overlay}>
              <div className={styles["slider-content"]}>
                <span className={styles["prev-title-span"]}>
                  {t("mainSlider.welcome")}
                </span>
                <h2 className={styles["slider-title"]}>
                  {t("mainSlider.thirdMsg")}
                </h2>
                <p className={styles["slider-paragraph"]}>
                  {t("mainSlider.sloganThree")}
                </p>
                <NavLink to="menu/appetizers" className={styles["slider-btn"]}>
                  {t("mainSlider.sliderBtn")}
                </NavLink>
              </div>
            </div>
          </div>
        </MainSlider>
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {AUTO_SLIDER_TITLES.homeTitles.map((title, index) => (
            <AutoSliderItem
              key={index * 2}
              title={t(`homeAutoSlider.${title}`)}
            />
          ))}
        </AutoSlider>
      </section>
      <section className={aboutUs["about-us"]}>
        <AboutUs />
      </section>
      <section className={menuCategories["categories"]}>
        <MenuCategories />
      </section>
      <section className={offers["offers-section"]}>
        <Offers />
      </section>
      <WhoWeAre />
      <Testimonials />
      <SignIn />
    </>
  );
}
