import offers from "../../styles/HomeStyles/offers.module.css";
import Slider from "react-slick";
import { NAMED_NAV_LINKS } from "../../data/link-routes";
import { NavLink } from "react-router-dom";
export default function Offers() {
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
      <span className="prev-title">Our Offers</span>
      <h2>Explore Our Exclusive Offers</h2>
      <Slider {...settings}>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>Craving Lunch</h5>
                <h6>Main dish + Soup or salad + soft drink</h6>
                <p>
                  Make your lunch more craving, craving lunch bring you all your
                  need in just one offer.
                </p>
                <NavLink to={NAMED_NAV_LINKS[0].lunchLink}>
                  Explore More
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
                <h5>Kids Eat Free!</h5>
                <h6>Free Meal For your Kid Every Thursday</h6>
                <p>
                  Let your kid enjoy an unforgetable weekend at Craving club!
                </p>
                <NavLink>Explore More</NavLink>
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
