/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../../data/autoSliderTitles";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Dessert({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const desserts = t("desserts", { returnObjects: true });
  const dessertsTitles = t("dessertsTitles", { returnObjects: true });
  const IMG_PATH = "menu/Dessert/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.dessertsTitles}
        >
          {dessertsTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {desserts.map((dessert, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${dessert.img}`}
                    imgAlt={dessert.title}
                    itemName={dessert.title}
                    itemDesription={dessert.description}
                    price={dessert.price}
                    cal={dessert.calories}
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
