/* eslint-disable no-unused-vars */
import { useState } from "react";
import primeClub from "../../styles/HomeStyles/signIn.module.css";

import { useTranslation } from "react-i18next";
export default function SignIn() {
  const { t } = useTranslation("home");
  const primeClubTitles = t(`primeClub`, { returnObjects: true });

  return (
    <section className={primeClub["prime-club"]}>
      <div className={primeClub["overlay"]}>
        <div className="container">
          <div className={primeClub["prime-club-container"]}>
            <div className={primeClub["form"]}>
              <h2>
                {primeClubTitles.title.first}
                <span>{primeClubTitles.title.second}</span>
              </h2>
              <p>{primeClubTitles.subTitle}</p>
              <form>
                <h2 className={primeClub["announce"]}>
                  {primeClubTitles.announce}
                </h2>
              </form>
            </div>
            <div className={primeClub["contact"]}>
              <div className={primeClub["contact-container"]}>
                <h2>{primeClubTitles.contactTitle}</h2>
                <div className={primeClub["booking-details-grid"]}>
                  <div>
                    <h3>{primeClubTitles.bookingTitle}</h3>
                    <span>{primeClubTitles.bookingNo}</span>
                  </div>
                  <div>
                    <h3>{primeClubTitles.locationsTitle}</h3>
                    <span>{primeClubTitles.firstBranch}</span>
                    <span>{primeClubTitles.secondBranch}</span>
                  </div>
                  <div>
                    <h3>{primeClubTitles.lunch}</h3>
                    <span>{primeClubTitles.lunchTitle}</span>
                    <span>{primeClubTitles.lunchTime}</span>
                  </div>
                  <div>
                    <h3>{primeClubTitles.openingHoursTitles}</h3>
                    <span>{primeClubTitles.openingHours}</span>
                    <span>{primeClubTitles.regularTimes}</span>
                    <span>{primeClubTitles.weekEnd}</span>
                    <span>{primeClubTitles.weekEndTimes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
