import offers from "../../styles/HomeStyles/offers.module.css";
import Slider from "react-slick";
import { NAMED_NAV_LINKS } from "../../data/link-routes";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Offers() {
  const { t } = useTranslation("home");
  const OFFERS_PATH = "../../assets/offers-imgs/";
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
      <span className="prev-title">{t("offers.offersSpan")}</span>
      <h2>{t("offers.offersTitle")}</h2>
      <Slider {...settings}>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>{t("offers.lunchTitle")}</h5>
                <h6>{t("offers.lunchSubTitle")}</h6>
                <p>{t("offers.lunchDesc")}</p>
                <NavLink to={NAMED_NAV_LINKS[0].lunchLink}>
                  {t("offers.offerBtn")}
                </NavLink>
              </div>
            </div>
            <div className={offers["img"]}>
              <NavLink to={NAMED_NAV_LINKS[0].lunchLink}>
                <img src={`${OFFERS_PATH}craving-lunch-en.jpeg`} alt="" />
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
                <img src={`${OFFERS_PATH}kids-meal-en.jpeg`} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
