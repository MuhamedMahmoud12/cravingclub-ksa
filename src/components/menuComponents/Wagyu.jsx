/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Wagyu({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const wagyus = t("wagyus", { returnObjects: true });
  const wagyusTitles = t("wagyusTitles", { returnObjects: true });
  const IMG_PATH = "menu/wagyu/";
  console.log(wagyus);
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {wagyusTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {wagyus.map((wagyu, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${wagyu.img}`}
                    imgAlt={wagyu.title}
                    itemName={wagyu.title}
                    itemDesription={wagyu.description}
                    price={wagyu.price}
                    cal={wagyu.calories}
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
