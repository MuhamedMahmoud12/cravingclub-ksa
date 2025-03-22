import styles from "../styles/reservationStyles/reservation.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function ContactUs() {
  const { t } = useTranslation("contact");
  const titles = t(`titles`, { returnObjects: true });
  console.log(titles);
  const callUs = t(`callUs`, { returnObjects: true });
  const findUs = t(`findUs`, { returnObjects: true });
  const [map, setMap] = useState("abha");
  return (
    <>
      <section className={styles["reservation"]}>
        <span className={"prev-title"}>{titles[0]}</span>
        <h2>{titles[1]}</h2>
        <img
          className={styles["reservation-img"]}
          src="/assets/reservation.webp"
          alt="reservation-img"
        />
        <div className={styles["contact-grid"]}>
          <div>
            <h3>{callUs.callUs}</h3>
            <span>{callUs.firstBranch}</span>
            <div className={styles["no-grid"]}>
              <img
                className={styles["icon"]}
                src="/assets/icons/call2.png"
                alt="call-icon"
              />
              <span className={styles["no"]}>
                {" "}
                <a href="https://wa.me/message/MJ22A3VRULAND1" target="_blank">
                  +966 54 210 7964
                </a>
              </span>
            </div>
            <span>{callUs.secondBranch}</span>
            <div className={styles["no-grid"]}>
              <img
                className={styles["icon"]}
                src="/assets/icons/call2.png"
                alt="call-icon"
              />
              <span className={styles["no"]}>
                <a href="https://wa.me/message/MJ22A3VRULAND1" target="_blank">
                  +966 55 218 4767
                </a>
              </span>
            </div>
          </div>
          <div>
            <h3>{findUs.findUs}</h3>
            <div className={styles["location-grid"]}>
              <img
                className={styles["icon"]}
                src="/assets/icons/location.png"
                alt="location-icon"
              />
              <span
                onClick={() => {
                  setMap("abha");
                }}
              >
                {findUs.firstBranch}
              </span>
            </div>
            <div className={styles["location-grid"]}>
              <img
                className={styles["icon"]}
                src="/assets/icons/location.png"
                alt="location-icon"
              />
              <span
                onClick={() => {
                  setMap("jazan");
                }}
              >
                {findUs.secondBranch}
              </span>
            </div>
          </div>
          <div className={styles["map"]}>
            {map === "abha" ? (
              <iframe
                className={styles["abha-map"]}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.2356075812904!2d42.67827367500739!3d18.290830482758725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb57ce6f162a25%3A0x1d232c862f80506b!2zQ1JBVklORyBDTFVCINmD2LHZitqk2YrZhtisINmD2YTZiNio!5e0!3m2!1sen!2seg!4v1742347223935!5m2!1sen!2seg"
                style={{ "border:": "0" }}
                loading="lazy"
              ></iframe>
            ) : (
              <iframe
                className={styles["jazan-map"]}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.3672462947857!2d42.54146057497394!3d16.90716738390041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1608094e5ef6a491%3A0xdea64403b296d05e!2zQ1JBVklORyBDTFVCINmD2LHZitmB2YrZhtisINmD2YTZiNio!5e0!3m2!1sen!2seg!4v1742356077241!5m2!1sen!2seg"
                width="600"
                height="450"
                style={{ "border:": "0" }}
                loading="lazy"
              ></iframe>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
