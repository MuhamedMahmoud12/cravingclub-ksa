/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";

import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Sandwiches({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const sandwiches = t("sandwiches", { returnObjects: true });
  const sandwichesSlider = t("sandwichesTitle", { returnObjects: true });
  console.log(sandwichesSlider);
  const IMG_PATH = "menu/sandwiches/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {sandwichesSlider.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {sandwiches.map((sandwich, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${sandwich.img}`}
                    imgAlt={sandwich.title}
                    itemName={sandwich.title}
                    itemDesription={sandwich.description}
                    price={sandwich.price}
                    cal={sandwich.calories}
                  ></Category>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
