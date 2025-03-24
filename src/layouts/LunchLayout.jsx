// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MainSlider from "../components/homeComponents/MainSlider";
import AutoSlider from "../components/homeComponents/AutoSlider";
import MenuItemsNav from "../components/menuComponents/MenuItemsNav";
import SLIDER_OPTIONS from "../data/sliderOptions";
import mainSlider from "../styles/HomeStyles/MainSlider.module.css";
import AutoSliderItem from "../components/homeComponents/AutoSliderItem";
import MenuNavItem from "../components/menuComponents/MenuNavItem";
import menuItemsNav from "../styles/menuStyles/menuItemsNav.module.css";
import lunchStyles from "../styles/LunchStyles/cravingLunch.module.css";
import SaudiRiyal from "../components/sharedComponents/Currency";
import { useTranslation } from "react-i18next";
export default function MenuLayout() {
  const { t } = useTranslation("menu");
  const lunchTitles = t("lunchTitles", { returnObjects: true });
  const IMG_PATH = "/assets/craving-lunch/";
  return (
    <div className="layout">
      <section className={lunchStyles["slider-section"]}>
        <MainSlider
          className={`${lunchStyles["lunch-slider"]} ${mainSlider["main-img-slider"]}`}
        >
          <div
            className={`${mainSlider["item"]} ${lunchStyles["item1"]}`}
          ></div>

          <div
            className={`${mainSlider["item"]} ${lunchStyles["item2"]}`}
          ></div>
          <div
            className={`${mainSlider["item"]} ${lunchStyles["item3"]}`}
          ></div>
        </MainSlider>
        <AutoSlider
          properties={SLIDER_OPTIONS[0].menuAutoSlider}
          name={lunchStyles["lunch-menu-select"]}
        >
          {lunchTitles.map((title, index) => (
            <AutoSliderItem key={index} title={title} />
          ))}
        </AutoSlider>
      </section>
      <MenuItemsNav className={`${menuItemsNav["menu-ul-padding-div"]} `}>
        <ul
          className={`${menuItemsNav["menu-ul"]} ${lunchStyles["lunch-aligned-list"]}`}
          id="fixed-menu"
        >
          <MenuNavItem
            className={lunchStyles["cat-li"]}
            imgPath={IMG_PATH}
            imgName={`49-2.webp`}
            itemName="49"
            categoryRoute="49Category"
            linkClass={"active-link"}
          >
            <SaudiRiyal className={lunchStyles["cls-2"]} />
          </MenuNavItem>
          <MenuNavItem
            className={lunchStyles["cat-li"]}
            imgPath={IMG_PATH}
            imgName={`59-2.webp`}
            itemName="59"
            categoryRoute="59Category"
            linkClass={"active-link"}
          >
            <SaudiRiyal className={lunchStyles["cls-2"]} />
          </MenuNavItem>
          <MenuNavItem
            className={lunchStyles["cat-li"]}
            imgPath={IMG_PATH}
            imgName={`79-2.webp`}
            itemName="79"
            categoryRoute="79Category"
            linkClass={"active-link"}
          >
            <SaudiRiyal className={lunchStyles["cls-2"]} />
          </MenuNavItem>
        </ul>
      </MenuItemsNav>
      <div className={lunchStyles["lunch-choices"]}>
        <div className="container">
          <div className={lunchStyles["choices-grid"]}>
            <div>
              <img
                src="/assets/craving-lunch/lunch-choices.jpg"
                alt="lunch-choices"
              />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
