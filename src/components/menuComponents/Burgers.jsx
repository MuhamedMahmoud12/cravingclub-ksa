/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Burgers({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const burgers = t("burgers", { returnObjects: true });
  const burgersSlider = t("burgersTitle", { returnObjects: true });
  const IMG_PATH = "/menu/burger/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.burgersTitle}
        >
          {burgersSlider.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {burgers.map((burger) => {
              return (
                <Category
                  key={burger.title}
                  imgPath={`${IMG_PATH}${burger.img}`}
                  imgAlt={burger.title}
                  itemName={burger.title}
                  itemDesription={burger.description}
                  price={burger.price}
                  cal={burger.calories}
                ></Category>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
