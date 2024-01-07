import React from "react";
import styles from "./SideBar.module.css";
import Img1 from "../images/market-share.png";
import Img2 from "../images/speech-bubble.png";
export default function SideBar() {
  return (
    <div>
      <div className={styles.sideBarContainer}>
        <div className={styles.sideBarBlockOne}>
          <div className={styles.sideBarLogoBlock}>
            <img
              src={Img1}
              alt="image"
              className={styles.sideBarLogoBlockImg}
            />
            <p className={styles.sideBarLogoBlockHeader}>BlueReceipt</p>
          </div>
          <div className={styles.sideBarSearchBlock}>
            <img
              src={Img2}
              alt="image"
              className={styles.sideBarSearchBlockIcon}
            />
            <p className={styles.sideBarSearchBlockHeader}>Search...</p>
          </div>

          <div className={styles.sideBarDashboardBlock}>
            <img
              src={Img1}
              alt="image"
              className={styles.sideBarDashboardBlockImg}
            />
            <p className={styles.sideBarDashboardBlockHeader}>Dashboard</p>
          </div>
        </div>

        <div className={styles.sideBarBlockTwo}>
          <div className={styles.sideBarListItemsBlock}>
            <div className={styles.sideBarListItem}>
              <img
                src={Img1}
                alt="image"
                className={styles.sideBarListItemLogo}
              />
              <p className={styles.sideBarListItemHeader}>Conversations</p>
            </div>
            <div className={styles.sideBarListItem}>
              <img
                src={Img1}
                alt="image"
                className={styles.sideBarListItemLogo}
              />
              <p className={styles.sideBarListItemHeader}>Automations</p>
            </div>
            <div className={styles.sideBarListItem}>
              <img
                src={Img1}
                alt="image"
                className={styles.sideBarListItemLogo}
              />
              <p className={styles.sideBarListItemHeader}>Campaigns</p>
            </div>
            <div className={styles.sideBarListItem}>
              <img
                src={Img1}
                alt="image"
                className={styles.sideBarListItemLogo}
              />
              <p className={styles.sideBarListItemHeader}>Popup</p>
            </div>
            <div className={styles.sideBarListItem}>
              <img
                src={Img1}
                alt="image"
                className={styles.sideBarListItemLogo}
              />
              <p className={styles.sideBarListItemHeader}>Live Chat</p>
            </div>
            <div className={styles.sideBarListItem}>
              <img
                src={Img1}
                alt="image"
                className={styles.sideBarListItemLogo}
              />
              <p className={styles.sideBarListItemHeader}>Segments</p>
            </div>
            <div className={styles.sideBarListItem}>
              <img
                src={Img1}
                alt="image"
                className={styles.sideBarListItemLogo}
              />
              <p className={styles.sideBarListItemHeader}>integrations</p>
            </div>
          </div>
          <div className={styles.sideBarProfileBlock}>
            <div className={styles.sideBarProfileImgBlock}>
              <img
                src={Img2}
                alt="image"
                className={styles.sideBarProfileImg}
              />
            </div>
            <div className={styles.sideBarProfileTextBlock}>
              <p className={styles.sideBarProfileBlockName}>Profile Name</p>
              <p className={styles.sideBarProfileBlockDescription}>
                Store Name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
