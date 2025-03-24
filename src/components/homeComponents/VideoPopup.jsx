/* eslint-disable react/prop-types */
import styles from "../../styles/HomeStyles/aboutUs.module.css";
export default function VideoPopup({ closePopup, video }) {
  return (
    <div className={styles["video-popup"]}>
      <div className={styles["video-popup-content"]}>
        <div className={styles["video-popup-close"]} onClick={closePopup}>
          <img src="assets/icons/close.png" alt="close-icon" />
        </div>
        <div className={styles["video-popup-video"]}>
          <video width="380" height="300" controls autoPlay muted>
            <source src={video[0]} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
