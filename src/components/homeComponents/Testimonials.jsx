import testimonials from "../../styles/HomeStyles/testimonials.module.css";
import TestimonialItem from "./TestimonialItem";
import Slider from "react-slick";
export default function Testimonials() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    dots: false,
  };

  return (
    <section className={testimonials["testimonials"]}>
      <div className="container">
        <span className="prev-title">Tasty Words</span>
        <h2>What they Say?</h2>
        <div className={testimonials["testimonials-container"]}>
          <Slider {...settings}>
            <TestimonialItem
              imgPath="slider-img1.jpg"
              reviewDes="Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food."
              reviewOwner="Raed Mokhtar"
              reviewSrc="Google Reviews"
            />
            <TestimonialItem
              imgPath="slider-img1.jpg"
              reviewDes="Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food."
              reviewOwner="Raed Mokhtar"
              reviewSrc="Google Reviews"
            />
            <TestimonialItem
              imgPath="slider-img1.jpg"
              reviewDes="Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food."
              reviewOwner="Raed Mokhtar"
              reviewSrc="Google Reviews"
            />
            <TestimonialItem
              imgPath="slider-img1.jpg"
              reviewDes="Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food."
              reviewOwner="Raed Mokhtar"
              reviewSrc="Google Reviews"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
}
