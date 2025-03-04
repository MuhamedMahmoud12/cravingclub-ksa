/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Pizza({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const pizzas = t("pizzas", { returnObjects: true });
  const pizzasSlider = t("pizzasTitles", { returnObjects: true });
  const IMG_PATH = "menu/pizza/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {pizzasSlider.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {pizzas.map((pizza, index) => {
              return (
                <>
                  <Category
                    key={index}
                    imgPath={`${IMG_PATH}${pizza.img}`}
                    imgAlt={pizza.title}
                    itemName={pizza.title}
                    itemDesription={pizza.description}
                    price={pizza.price}
                    cal={pizza.calories}
                  ></Category>
                </>
              );
            })}
            {/* <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            />
            <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            />
            <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            />
            <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            />
            <Category
              imgPath="Appetizers/bogo-traditional-wings.webp"
              imgAlt="bogo-traditional-wings"
              itemName="bogo traditional wings"
              itemDesription="Fried chicken wings tossed in spicy Buffalo sauce served with crisp celery sticks & Bleu cheese dip"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
