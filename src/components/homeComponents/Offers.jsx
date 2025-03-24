import offers from "../../styles/HomeStyles/offers.module.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Offers() {
  const { t } = useTranslation("home");
  const offersTittles = t("offers", { returnObjects: true });
  console.log(offersTittles);
  const LUNCH_PATH = "assets/craving-lunch/";
  const KIDS_PATH = "assets/kids-images/";
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1500,
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
  };
  return (
    <div className="container">
      <span className="prev-title">{offersTittles.offersSpan}</span>
      <h2>{offersTittles.offersTitle}</h2>
      <Slider {...settings}>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>{offersTittles.lunchTitle}</h5>
                <h6>{offersTittles.lunchSubTitle}</h6>
                <p>{offersTittles.lunchDesc}</p>
                <NavLink>{offersTittles.offerBtn}</NavLink>
              </div>
            </div>
            <div className={offers["img"]}>
              <NavLink>
                <img src={`${LUNCH_PATH}${offersTittles.lunchImage}`} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>{t("offers.kidsTitle")}</h5>
                <h6>{t("offers.kidsSubTitle")}</h6>
                <p>{t("offers.kidsDesc")}</p>
                <NavLink>{t("offers.offerBtn")}</NavLink>
              </div>
            </div>
            <div className={offers["img"]}>
              <NavLink>
                <img src={`${KIDS_PATH}${offersTittles.kidsImage}`} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
