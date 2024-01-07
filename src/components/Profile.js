import React from 'react'
import styles from "./Profile.module.css"
import Img1 from "../images/market-share.png";
import Img2 from "../images/speech-bubble.png";
export default function Profile() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.profileSectionOne}>
          <div className={styles.profileDetailsBlock}>
            <div className={styles.profileImgBlock}>
              <img src={Img1} alt="image" className={styles.profileImage} />
            </div>
            <div className={styles.profileContentBlock}>
              <p className={styles.profileHeaderOne}>Good Morning Zones</p>
              <p className={styles.profileHeaderTwo}>
                Here are your stats for Today, 24 Aug 2020
              </p>
            </div>
          </div>
          <div className={styles.durationBlock}>
            <div className={styles.calenderBlock}>
              <img src={Img1} alt="image" className={styles.calenderIcon} />
              <p className={styles.calenderHeader}>Today</p>
            </div>
            <p className={styles.durationTextItem}>compared to</p>
            <div className={styles.dateBlock}>
              <p className={styles.dateHeader}>Previous Period</p>
              <img src={Img1} alt="image" className={styles.dateIcon} />
            </div>
          </div>
        </div>
        <div className={styles.profileSectionTwo}>
          <div className={styles.parameterSection}>
            <div className={styles.parameterHeaderBlock}>
              <p className={styles.parameterType}>{"Total Revenue"}</p>
              <p className={styles.parameterPercentage}>{"+12.5%"}</p>
            </div>
            <p className={styles.parameterValue}>{"$32621.72"}</p>
            <p className={styles.parameterDetails}>{"433 orders"}</p>
          </div>
          <div className={styles.parameterSection}>
            <div className={styles.parameterHeaderBlock}>
              <p className={styles.parameterType}>{"Subscribers"}</p>
              <p className={styles.parameterPercentage}>{"+32.5%"}</p>
            </div>
            <p className={styles.parameterValue}>{"484,205"}</p>
            <p className={styles.parameterDetails}>{"$56 Average Order"}</p>
          </div>
          <div className={styles.parameterSection}>
            <div className={styles.parameterHeaderBlock}>
              <p className={styles.parameterType}>{"Conversations"}</p>
              <p className={styles.parameterPercentageNeg}>{"-3.4%"}</p>
            </div>
            <p className={styles.parameterValue}>{"552,553"}</p>
            <p className={styles.parameterDetails}>{"5min Average Response Time"}</p>
          </div>
          <div className={styles.parameterSection}>
            <div className={styles.parameterHeaderBlock}>
              <p className={styles.parameterType}>{"Popup Conversion Rate"}</p>
              <p className={styles.parameterPercentage}>{"+32.5%"}</p>
            </div>
            <p className={styles.parameterValue}>{"25%"}</p>
            <p className={styles.parameterDetails}>{"5% Sales Conversion Rate"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
