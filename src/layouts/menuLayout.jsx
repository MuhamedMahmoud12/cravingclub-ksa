import { Outlet } from "react-router-dom";
import MainSlider from "../components/homeComponents/MainSlider";
import AutoSlider from "../components/homeComponents/AutoSlider";
import MenuItemsNav from "../components/menuComponents/MenuItemsNav";
import SLIDER_OPTIONS from "../data/sliderOptions";
import mainSlider from "../styles/HomeStyles/MainSlider.module.css";
import menuSlider from "../styles/menuStyles/menuMainSlider.module.css";
import MenuNavItem from "../components/menuComponents/MenuNavItem";
import menuItemsNav from "../styles/menuStyles/menuItemsNav.module.css";
import AutoSliderItem from "../components/homeComponents/AutoSliderItem";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function MenuLayout() {
  const { t } = useTranslation("menu");
  const menuSliderTitles = t(`menuAutoSlider`, { returnObjects: true });
  const categoriesSections = t(`categoriesSections`, { returnObjects: true });
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
          <NavLink>
            <div
              className={`${mainSlider["item"]} ${menuSlider["item2"]} item`}
            ></div>
          </NavLink>
          {/* <NavLink to="/iftar-craving">
            <div
              className={`${mainSlider["item"]} ${menuSlider["item3"]} item`}
            ></div>
          </NavLink>
          <NavLink to="/iftar-craving">
            <div
              className={`${mainSlider["item"]} ${menuSlider["item4"]} item`}
            ></div>
          </NavLink> */}
          {/* <NavLink to="/iftar-craving">
            <div
              className={`${mainSlider["item"]} ${menuSlider["item5"]} item`}
            ></div>
          </NavLink>
          <NavLink to="/iftar-craving">
            <div
              className={`${mainSlider["item"]} ${menuSlider["item6"]} item`}
            ></div>
          </NavLink> */}
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
            imgName="craving-sampler.webp"
            imgPath="/assets/menu/appetizers/"
            itemName={categoriesSections.appetizers}
            categoryRoute="appetizers"
          />
          <MenuNavItem
            imgName="southern-soup.webp"
            imgPath="/assets/menu/soup&salad/"
            itemName={categoriesSections.soupSalad}
            categoryRoute="soup-salad"
          />
          <MenuNavItem
            imgName="caribbean-sandwich.webp"
            imgPath="/assets/menu/sandwiches/"
            itemName={categoriesSections.sandwiches}
            categoryRoute="sandwiches"
          />
          <MenuNavItem
            imgName="craving-burger.webp"
            imgPath="/assets/menu/burger/"
            itemName={categoriesSections.burger}
            categoryRoute="burgers"
          />
          <MenuNavItem
            imgName="cajun-chicken-pasta.webp"
            imgPath="/assets/menu/pasta/"
            itemName={categoriesSections.pasta}
            categoryRoute="pasta"
          />
          <MenuNavItem
            imgName="cowboy-pizza.webp"
            imgPath="/assets/menu/pizza/"
            itemName={categoriesSections.pizza}
            categoryRoute="pizza"
          />
          <MenuNavItem
            imgName="blackrock-ribeye.webp"
            imgPath="/assets/menu/steak&ribs/"
            itemName={categoriesSections.steakRibs}
            categoryRoute="steak-ribs"
          />
          <MenuNavItem
            imgName="wagyu-ribeye-rock.webp"
            imgPath="/assets/menu/wagyu/"
            itemName={categoriesSections.wagyu}
            categoryRoute="wagyu"
          />
          <MenuNavItem
            imgName="scampi-salmon.webp"
            imgPath="/assets/menu/Seafood/"
            itemName={categoriesSections.seaFood}
            categoryRoute="seafood"
          />
          <MenuNavItem
            imgName="skillet-chicken-gravy.webp"
            imgPath="/assets/menu/Chicken/"
            itemName={categoriesSections.chicken}
            categoryRoute="chicken"
          />
          <MenuNavItem
            imgName="marinara-sauce-pasta.webp"
            imgPath="/assets/menu/kids-meal/"
            itemName={categoriesSections.kidsMeals}
            categoryRoute="kids-meal"
          />
          <MenuNavItem
            imgName="rock-slide-brownie.webp"
            imgPath="/assets/menu/Dessert/"
            itemName={categoriesSections.dessert}
            categoryRoute="dessert"
          />
          <MenuNavItem
            imgName="filling-drinks.webp"
            imgPath="/assets/menu/drinks/"
            itemName={categoriesSections.fillingDrinks}
            categoryRoute="filling-drinks"
          />
          <MenuNavItem
            imgName="shakers.webp"
            imgPath="/assets/menu/drinks/"
            itemName={categoriesSections.shakers}
            categoryRoute="shakers"
          />
          <MenuNavItem
            imgName="smoothies.webp"
            imgPath="/assets/menu/drinks/"
            itemName={categoriesSections.smoothies}
            categoryRoute="smoothies"
          />
          <MenuNavItem
            imgName="mojitos.webp"
            imgPath="/assets/menu/drinks/"
            itemName={categoriesSections.mojitos}
            categoryRoute="mojitos"
          />
          <MenuNavItem
            imgName="milk-shake.webp"
            imgPath="/assets/menu/drinks/"
            itemName={categoriesSections.milkShakes}
            categoryRoute="milk-shakes"
          />
          <MenuNavItem
            imgName="sensation.webp"
            imgPath="/assets/menu/drinks/"
            itemName={categoriesSections.sensations}
            categoryRoute="sensations"
          />
          <MenuNavItem
            imgName="coffe.webp"
            imgPath="/assets/menu/drinks/"
            itemName={categoriesSections.coffe}
            categoryRoute="coffe"
          />
          <MenuNavItem
            imgName="water.webp"
            imgPath="/assets/menu/drinks/"
            itemName={categoriesSections.drinks}
            categoryRoute="other-drinks"
          />
        </ul>
      </MenuItemsNav>

      <Outlet />
    </div>
  );
}
