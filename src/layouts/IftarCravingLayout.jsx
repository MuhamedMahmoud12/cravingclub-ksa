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
import iftarStyles from "../styles/IftarCraving/iftarCraving.module.css";
import { useTranslation } from "react-i18next";
export default function IftarCravingLayout() {
  const IMG_PATH = "/assets/iftar-craving/";
  const { t } = useTranslation("menu");
  const iftarTitles = t("iftarTitles", { returnObjects: true });
  const iftarSections = t("iftar_sections", { returnObjects: true });
  return (
    <div className="layout">
      <section className={lunchStyles["slider-section"]}>
        <MainSlider
          className={`${iftarStyles["iftar-slider"]} ${mainSlider["main-img-slider"]}`}
        >
          <div
            className={`${mainSlider["item"]} ${iftarStyles["item1"]} ${iftarStyles["item"]}`}
          ></div>

          <div
            className={`${mainSlider["item"]} ${iftarStyles["item2"]} ${iftarStyles["item"]}`}
          ></div>
          <div
            className={`${mainSlider["item"]} ${iftarStyles["item3"]} ${iftarStyles["item"]}`}
          ></div>
          <div
            className={`${mainSlider["item"]} ${iftarStyles["item4"]} ${iftarStyles["item"]}`}
          ></div>
          <div
            className={`${mainSlider["item"]} ${iftarStyles["item5"]} ${iftarStyles["item"]}`}
          ></div>
          <div
            className={`${mainSlider["item"]} ${iftarStyles["item6"]} ${iftarStyles["item"]}`}
          ></div>
        </MainSlider>
        <AutoSlider properties={SLIDER_OPTIONS[0].menuAutoSlider}>
          {iftarTitles.map((title, index) => (
            <AutoSliderItem key={index} title={title} />
          ))}
        </AutoSlider>
      </section>
      <MenuItemsNav className={`${menuItemsNav["menu-ul-padding-div"]} `}>
        <ul
          className={`${menuItemsNav["menu-ul"]} ${iftarStyles["iftar-aligned-list"]}`}
          id="fixed-menu"
        >
          <MenuNavItem
            className={iftarStyles["cat-li"]}
            imgName={`family-sampler.webp`}
            imgPath={`${IMG_PATH}`}
            itemName={`${iftarSections[0]}`}
            categoryRoute="ramadan-appetizers"
          />
          <MenuNavItem
            className={iftarStyles["cat-li"]}
            imgName={`smoky-platter.webp`}
            imgPath={`${IMG_PATH}`}
            itemName={`${iftarSections[1]}`}
            categoryRoute="sharing-platters"
          />
          <MenuNavItem
            className={iftarStyles["cat-li"]}
            imgName={`iftar-2.webp`}
            imgPath={`${IMG_PATH}`}
            itemName={`${iftarSections[2]}`}
            categoryRoute="iftar-two"
          />
          <MenuNavItem
            className={iftarStyles["cat-li"]}
            imgName={`iftar-2.webp`}
            imgPath={`${IMG_PATH}`}
            itemName={`${iftarSections[3]}`}
            categoryRoute="iftar-four"
          />
        </ul>
      </MenuItemsNav>

      <Outlet />
    </div>
  );
}
