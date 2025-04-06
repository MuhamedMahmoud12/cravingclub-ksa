/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Chicken({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const chickens = t("chickens", { returnObjects: true });
  const chickenTitles = t("chickenTitles", { returnObjects: true });
  const IMG_PATH = "menu/Chicken/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {chickenTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {chickens.map((chicken) => {
              return (
                <Category
                  key={chicken.title}
                  imgPath={`${IMG_PATH}${chicken.img}`}
                  imgAlt={chicken.title}
                  itemName={chicken.title}
                  itemDesription={chicken.description}
                  price={chicken.price}
                  cal={chicken.calories}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
