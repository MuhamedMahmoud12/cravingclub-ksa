/* eslint-disable react/prop-types */
import testimonials from "../../styles/HomeStyles/testimonials.module.css";
export default function TetimonialItem({ imgSrc }) {
  return (
    <div>
      <div className={testimonials["testimonial"]}>
        <img
          src={imgSrc}
          alt="review"
          className={testimonials["testimonials-img"]}
        />
      </div>
    </div>
  );
}
