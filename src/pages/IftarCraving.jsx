import { iftar_craving } from "../data/menuCategories";
import Category from "../components/menuComponents/Category";
import menuCategories from "../styles/menuStyles/menuCategories.module.css";
import MainSlider from "../components/homeComponents/MainSlider";
import AutoSlider from "../components/homeComponents/AutoSlider";
import MenuItemsNav from "../components/menuComponents/MenuItemsNav";
import SLIDER_OPTIONS from "../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../data/autoSliderTitles";
import mainSlider from "../styles/HomeStyles/MainSlider.module.css";
import AutoSliderItem from "../components/homeComponents/AutoSliderItem";
import MenuNavItem from "../components/menuComponents/MenuNavItem";
import menuItemsNav from "../styles/menuStyles/menuItemsNav.module.css";
import lunchStyles from "../styles/LunchStyles/cravingLunch.module.css";
export default function IftarCraving() {
  return (
    <>
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
        <AutoSlider properties={SLIDER_OPTIONS[0].menuAutoSlider}>
          {AUTO_SLIDER_TITLES.menuVatTitles.map((title, index) => (
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
            imgName="appetizers.webp"
            itemName="Family Sampler"
            categoryRoute="family-sampler"
          />
          <MenuNavItem
            imgName="soup&salad.jpg"
            itemName="Duo Sampler"
            categoryRoute="duo-sampler"
          />
          <MenuNavItem
            imgName="sandwiches.jpg"
            itemName="Smoky Platter"
            categoryRoute="smoky-platter"
          />
          <MenuNavItem
            imgName="sandwiches.jpg"
            itemName="California Rock"
            categoryRoute="california-rock"
          />
          <MenuNavItem
            imgName="sandwiches.jpg"
            itemName="Mississippi Platter"
            categoryRoute="mississippi-platter"
          />
          <MenuNavItem
            imgName="sandwiches.jpg"
            itemName="Southern Platter"
            categoryRoute="southern-platter"
          />
        </ul>
      </MenuItemsNav>
      <div className={`${menuCategories["item-section"]}`}>
        <div className="container">
          <div className={menuCategories["items-container"]}>
            {iftar_craving.map((category, index) => (
              <Category
                key={index}
                imgPath={`iftar-craving/${category.img}`}
                imgAlt={category.title}
                itemName={category.title}
                itemDesription={category.description}
                price={category.price}
                cal={category.calories}
              ></Category>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
