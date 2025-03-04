import { Outlet } from "react-router-dom";
import MainSlider from "../components/homeComponents/MainSlider";
import AutoSlider from "../components/homeComponents/AutoSlider";
import MenuItemsNav from "../components/menuComponents/MenuItemsNav";
import SLIDER_OPTIONS from "../data/sliderOptions";
import mainSlider from "../styles/HomeStyles/MainSlider.module.css";
import menuSlider from "../styles/MenuStyles/MenuMainSlider.module.css";
import MenuNavItem from "../components/menuComponents/MenuNavItem";
import menuItemsNav from "../styles/menuStyles/menuItemsNav.module.css";
import AutoSliderItem from "../components/homeComponents/AutoSliderItem";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function MenuLayout() {
  const { t } = useTranslation("menu");
  const menuSliderTitles = t(`menuAutoSlider`, { returnObjects: true });
  return (
    <div className="layout">
      <section className={menuSlider["slider-section"]}>
        <MainSlider
          className={`${menuSlider["menu-slider"]} ${mainSlider["main-img-slider"]}`}
        >
          <NavLink to="/craving-lunch">
            <div
              className={`${mainSlider["item"]} ${menuSlider["item1"]} item`}
            ></div>
          </NavLink>
          <div
            className={`${mainSlider["item"]} ${menuSlider["item2"]} item`}
          ></div>
        </MainSlider>
        <AutoSlider properties={SLIDER_OPTIONS[0].menuAutoSlider}>
          {menuSliderTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
      </section>
      <MenuItemsNav>
        <ul className={menuItemsNav["menu-ul"]} id="fixed-menu">
          <MenuNavItem
            imgName="appetizers.webp"
            itemName={t("menuNavItems.Appetizers")}
            categoryRoute="appetizers"
          />
          <MenuNavItem
            imgName="soup&salad.jpg"
            itemName={t("menuNavItems.Soup")}
            categoryRoute="soup-salad"
          />
          <MenuNavItem
            imgName="sandwiches.jpg"
            itemName={t("menuNavItems.Sandwiches")}
            categoryRoute="sandwiches"
          />
          <MenuNavItem
            imgName="burgers.jpg"
            itemName={t("menuNavItems.Burgers")}
            categoryRoute="burgers"
          />
          <MenuNavItem
            imgName="pasta.jpg"
            itemName={t("menuNavItems.Pasta")}
            categoryRoute="pasta"
          />
          <MenuNavItem
            imgName="pizza.jpg"
            itemName={t("menuNavItems.Pizza")}
            categoryRoute="pizza"
          />
          <MenuNavItem
            imgName="steak&ribs.jpg"
            itemName={t("menuNavItems.Steak&Ribs")}
            categoryRoute="steak-ribs"
          />
          <MenuNavItem
            imgName="wagyu.jpg"
            itemName={t("menuNavItems.Wagyu")}
            categoryRoute="wagyu"
          />
          <MenuNavItem
            imgName="seafood.jpg"
            itemName={t("menuNavItems.SeaFood")}
            categoryRoute="seafood"
          />
          <MenuNavItem
            imgName="chicken.jpg"
            itemName={t("menuNavItems.Chicken")}
            categoryRoute="chicken"
          />
          <MenuNavItem
            imgName="kids-meal.jpg"
            itemName={t("menuNavItems.KidsMeals")}
            categoryRoute="kids-meal"
          />
          <MenuNavItem
            imgName="dessert.jpg"
            itemName={t("menuNavItems.Dessert")}
            categoryRoute="dessert"
          />
        </ul>
      </MenuItemsNav>

      <Outlet />
    </div>
  );
}
