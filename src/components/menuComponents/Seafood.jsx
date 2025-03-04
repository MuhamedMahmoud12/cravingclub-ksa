/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Seafood({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const seafoods = t("seafoods", { returnObjects: true });
  const seafoodTitles = t("seafoodTitles", { returnObjects: true });
  const IMG_PATH = "menu/Seafood/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {seafoodTitles.map((title, index) => (
            <AutoSliderItem key={index} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {seafoods.map((seafood, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${seafood.img}`}
                    imgAlt={seafood.title}
                    itemName={seafood.title}
                    itemDesription={seafood.description}
                    price={seafood.price}
                    cal={seafood.calories}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
