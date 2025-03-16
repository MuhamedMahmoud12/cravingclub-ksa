/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function KidsMeal({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const kids_meals = t("kids_meals", { returnObjects: true });
  const kidsMealsTitles = t("kidsMealsTitles", { returnObjects: true });
  const IMG_PATH = "menu/kids-meal/";
  console.log(kids_meals);
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {kidsMealsTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {kids_meals.map((kids_meal, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${kids_meal.img}`}
                    imgAlt={kids_meal.title}
                    itemName={kids_meal.title}
                    itemDesription={kids_meal.description}
                    price={kids_meal.price}
                    cal={kids_meal.calories}
                  >
                    {kids_meal.pasta && (
                      <>
                        <div
                          className={`${categoryStyle["price-cal"]} ${categoryStyle["addOne-container"]}`}
                        >
                          <span
                            className={`${categoryStyle.price} ${categoryStyle["addOne-span"]}`}
                          >
                            {kids_meal.pasta[0]}
                          </span>
                          <span
                            className={`${categoryStyle.cal} ${categoryStyle["addOne-span"]}`}
                          >
                            {kids_meal.pasta[1]}
                          </span>
                        </div>
                      </>
                    )}
                    {kids_meal.protein && (
                      <>
                        <div
                          className={`${categoryStyle["price-cal"]} ${categoryStyle["addOne-container"]}`}
                        >
                          <span
                            className={`${categoryStyle.price} ${categoryStyle["addOne-span"]}`}
                          >
                            {kids_meal.protein[0]}
                          </span>
                          <span
                            className={`${categoryStyle.cal} ${categoryStyle["addOne-span"]}`}
                          >
                            {kids_meal.protein[1]}
                          </span>
                        </div>
                      </>
                    )}
                  </Category>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
