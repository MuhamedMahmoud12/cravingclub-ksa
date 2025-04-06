// import styles from "../../styles/wheelStyles/SpinningWheel.module.css";
// import { useEffect, useState } from "react";
// import WheelComponent from "react-wheel-of-prizes";
// import { useTranslation } from "react-i18next";
// export default function SpinningWheel() {
//   const { t } = useTranslation("spin");
//   const spinWinners = t("winners", { returnObjects: true });
//   const spinTitles = t("titles", { returnObjects: true });
//   const spinWinCase = t("winCase", { returnObjects: true });

//   const [hasSpun, setHasSpun] = useState(false);
//   const [spinPopup, setSpinPopup] = useState(false);
//   const [winner, setWinner] = useState(null);
//   const generateUUID = () => crypto.randomUUID();
//   const getDeviceUUID = () => {
//     let storedUUID = localStorage.getItem("deviceUUID");
//     let getWinner = localStorage.getItem("winnerName");
//     setWinner(getWinner);
//     return storedUUID;
//   };
//   useEffect(() => {
//     let uuid = getDeviceUUID();
//     if (uuid) {
//       setSpinPopup(true);
//       setHasSpun(true);
//     } else {
//       setSpinPopup(false);
//       setHasSpun(false);
//     }
//   }, [hasSpun]);
//   const onFinished = async (winner) => {
//     const uuid = generateUUID();
//     localStorage.setItem("deviceUUID", uuid);
//     localStorage.setItem("winnerName", winner);
//     setSpinPopup(true);
//     setHasSpun(true);
//   };

//   const segments = [
//     spinWinners.discount15,
//     spinWinners.freeBurger,
//     spinWinners.discount10,
//     spinWinners.off50,
//     spinWinners.freeDessert,
//     spinWinners.discount15,
//     spinWinners.freeBurger,
//     spinWinners.discount10,
//     spinWinners.off50,
//     spinWinners.freeDessert,
//   ];
//   const segColors = [
//     "#ff9f00",
//     "#212529",
//     "#ff9f00",
//     "#212529",
//     "#ff9f00",
//     "#212529",
//     "#ff9f00",
//     "#212529",
//     "#ff9f00",
//     "#212529",
//   ];

//   return (
//     <>
//       <div className={styles["wheel-grid"]}>
//         <img src={`/assets/${spinTitles.img}`} alt="Eid-mubarak" />
//         <h1>{spinTitles.title}</h1>
//         <h2>{spinTitles.subTitle}</h2>

//         <div className={styles["wheel"]}>
//           {spinPopup && (
//             <div className={styles["confetti"]}>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//               <div className={styles["confetti-piece"]}></div>
//             </div>
//           )}
//           <WheelComponent
//             segments={segments}
//             segColors={segColors}
//             onFinished={onFinished}
//             primaryColor="#212529"
//             contrastColor="white"
//             buttonText="SPIN"
//             isOnlyOnce={hasSpun}
//             size={250}
//             upDuration={500}
//             downDuration={600}
//             fontFamily="roboto"
//           />
//         </div>
//         {spinPopup && (
//           <div className={styles["spin-popup"]}>
//             <div className={styles["popup-container"]}>
//               <p>{spinWinCase.winMsg}</p>
//               <span>{winner}</span>
//               <ol>
//                 <li>{spinWinCase.steps[0]}</li>
//                 <li>{spinWinCase.steps[1]}</li>
//                 <li>{spinWinCase.steps[2]}</li>
//               </ol>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
