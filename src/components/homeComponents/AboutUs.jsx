import aboutUs from "../../styles/HomeStyles/aboutUs.module.css";
import ScrollCounter from "../sharedComponents/Counter";
import VideoPopup from "./introPopup";
import { useState } from "react";
const VIDEO_PATH = "../../assets/video-imgs/";
const ICONS_PATH = "../../assets/icons/";
const COUNTTO_PATH = "../../assets/countToImgs/";

import { useTranslation } from "react-i18next";
export default function AboutUs() {
  const [video, setVideo] = useState(["", false]);
  const openPopup = () => {
    setVideo(["/assets/intro-video/craving-intro.mp4", true]);
  };
  const closePopup = () => {
    setVideo(["", false]);
  };
  const { t } = useTranslation("home");
  return (
    <>
      {video[1] && <VideoPopup closePopup={closePopup} video={video} />}
      <div className="container">
        <div className={aboutUs["about-heading"]}>
          <span className={`prev-title`}>{t("aboutUs.aboutSpan")}</span>
          <h2 className={aboutUs["title"]}>
            <span className={aboutUs["first-title-span"]}>
              {t("aboutUs.aboutHeading", { returnObjects: true })[0]}
            </span>
            <span className={aboutUs["second-title-span"]}>
              {t("aboutUs.aboutHeading", { returnObjects: true })[1]}
            </span>
            <span className={aboutUs["third-title-span"]}>
              {t("aboutUs.aboutHeading", { returnObjects: true })[2]}
            </span>
            <span className={aboutUs["fourth-title-span"]}>
              {t("aboutUs.aboutHeading", { returnObjects: true })[3]}
            </span>
          </h2>
        </div>
        <div className={aboutUs["about-video"]}>
          <div className={aboutUs["overlay"]}>
            <div onClick={openPopup} className={aboutUs["play-btn"]}>
              <img src={`${VIDEO_PATH}play.png`} alt="play-video" />
            </div>
            <div className={aboutUs["spin-text"]}>
              <img src={`${VIDEO_PATH}video_text.png`} alt="vide-text" />
            </div>
            <div className={aboutUs["video-content"]}>
              <div>
                <div className={aboutUs["icon"]}>
                  <img
                    src={`${ICONS_PATH}maps-and-flags.png`}
                    alt="locaion-icon"
                  />
                </div>
                <div className={aboutUs["text"]}>
                  <h5>{t("aboutUs.locations")}</h5>
                  <p>{t("aboutUs.firstBranch")}</p>
                  <p>{t("aboutUs.secondBranch")}</p>
                </div>
              </div>
              <div>
                <div className={aboutUs["icon"]}>
                  <img src={`${ICONS_PATH}clock.png`} alt="open-hours-icon" />
                </div>
                <div className={aboutUs["text"]}>
                  <h5>{t("aboutUs.openHours")}</h5>
                  <p>{t("aboutUs.openHoursTime")}</p>
                  <p>{t("aboutUs.openHoursTime2")}</p>
                </div>
              </div>
              <div>
                <div className={aboutUs["icon"]}>
                  <img src={`${ICONS_PATH}calendar.png`} alt="locaion-icon" />
                </div>
                <div className={aboutUs["text"]}>
                  <h5>{t("aboutUs.reservation")}</h5>
                  <p>+966 54 798 4094</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={aboutUs["about-rate"]}>
          <div className={aboutUs["first-div"]}>
            <img src={`${COUNTTO_PATH}happy.png`} alt="Happy-customers" />
            <div className={aboutUs["count-to"]}>
              <ScrollCounter
                to={6000}
                speed={2000}
                className={aboutUs["count-to"]}
                id="happy-customers"
              />
              <span className={aboutUs.plus}>{t("aboutUs.plusSpan")}</span>
            </div>
            <span className={aboutUs.text}>{t("aboutUs.guestDesc")}</span>
          </div>
          <div>
            <img src={`${COUNTTO_PATH}like.png`} alt="google-reviews" />
            <div className={aboutUs["count-to"]}>
              <ScrollCounter
                className={aboutUs["count-to"]}
                id="google-reviews"
                to={4776}
                speed={2000}
              />
              <span className={aboutUs.plus}>+</span>
            </div>
            <span className={aboutUs.text}>{t("aboutUs.reviewsDesc")}</span>
          </div>
          <div>
            <img src={`${COUNTTO_PATH}branch.png`} alt="branches" />
            <div className={aboutUs["count-to"]}>
              <ScrollCounter
                className={aboutUs["count-to"]}
                id="google-reviews"
                to={2}
                speed={2000}
              />
              <span className={aboutUs.plus}>+</span>
            </div>
            <span className={aboutUs.text}>{t("aboutUs.branchesDesc")}</span>
          </div>
        </div>
      </div>
    </>
  );
}
