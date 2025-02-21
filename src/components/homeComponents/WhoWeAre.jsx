import whoWeAre from "../../styles/HomeStyles/whoWeAre.module.css";
import Slider from "react-slick";
export default function WhoWeAre() {
  const WHO_WE_ARE_PATH = "../../assets/who-we-are/";

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "240px",
    slidesToShow: 4,
    autoplay: true,
    speed: 3000, // slideTransition
    autoplaySpeed: 3000, // autoplayTimeout & autoplaySpeed
    cssEase: "linear", // slideTransition
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 4,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 4,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <section className={whoWeAre["who-we-are"]}>
      <div className="container">
        <div className={whoWeAre["content"]}>
          <img src="../../assets/bull-01.png" alt="bull-Logo" />
          <span>Who We Are</span>
          <h2>
            A restaurant with flavors that stand the test of time! We serve only
            real, high-quality food with authentic flavors and a vibrant
            atmosphere. An experience you’ll never forget. get ready for a
            life-changing
          </h2>
        </div>
      </div>
      <div
        className={`${whoWeAre["who-we-are-carousel"]} ${whoWeAre["left-gallery"]}`}
      >
        <Slider {...settings}>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img1.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img2.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img3.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img4.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img5.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img6.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img7.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img8.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img9.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img10.jpeg`} alt="who-we-are-img" />
          </div>
        </Slider>
      </div>
      <div
        className={`${whoWeAre["who-we-are-carousel"]} ${whoWeAre["right-gallery"]}`}
      >
        <Slider {...settings}>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img11.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img12.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img13.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img14.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img15.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img16.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img17.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img18.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img19.jpeg`} alt="who-we-are-img" />
          </div>
        </Slider>
      </div>
      <a href="#">Read Our Story</a>
    </section>
  );
}
