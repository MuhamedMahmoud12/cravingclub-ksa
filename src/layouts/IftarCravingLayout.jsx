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
import iftarStyles from "../styles/iftarCraving/iftarCraving.module.css";
import { useTranslation } from "react-i18next";
export default function IftarCravingLayout() {
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
            imgName="appetizers.webp"
            itemName={`${iftarSections[0]}`}
            categoryRoute="family-sampler"
          />
          <MenuNavItem
            imgName="appetizers.webp"
            itemName={`${iftarSections[1]}`}
            categoryRoute="family-sampler"
          />
          <MenuNavItem
            imgName="soup&salad.jpg"
            itemName={`${iftarSections[2]}`}
            categoryRoute="duo-sampler"
          />
          <MenuNavItem
            imgName="sandwiches.jpg"
            itemName={`${iftarSections[3]}`}
            categoryRoute="smoky-platter"
          />
        </ul>
      </MenuItemsNav>

      <Outlet />
    </div>
  );
}
