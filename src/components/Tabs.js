import React from 'react'
import styles from "./Tabs.module.css"
import Img1 from "../images/market-share.png";
import Img2 from "../images/speech-bubble.png";

export default function Tabs() {
  return (
    <div>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsSection}>
          <div className={styles.tabsListBlock}>
            <div className={styles.tabItemActive}>
              <p>{"Automations"}</p>
            </div>
            <div className={styles.tabItem}>
              <p>{"Campaigns"}</p>
            </div>
            <div className={styles.tabItem}>
              <p>{"Segments"}</p>
            </div>
            <div className={styles.tabsDateItem}>
              <p className={styles.tabsDateItemText}>Last Month</p>
              <img
                src={Img1}
                alt={"image"}
                className={styles.tabsDateItemImg}
              />
            </div>
          </div>
          <div className={styles.tabsDetailBlock}>
            <div className={styles.tabDetailItem}>
              <div className={styles.tabDetailItemSection1}>
                <div className={styles.tabDetailItemImgBlock}>
                  <img
                    src={Img1}
                    alt="image"
                    className={styles.tabDetailItemImg}
                  />
                </div>
                <div className={styles.tabDetailItemContentBlock}>
                  <p className={styles.tabDetailItemText1Active}>
                    {"Abandoned Cart 7 Days"}
                  </p>
                  <p className={styles.tabDetailItemText2}>
                    {"4024 Sent | 124 Clicks"}
                  </p>
                </div>
              </div>
              <div className={styles.tabDetailItemSection2}>
                <p className={styles.tabDetailItemText3}>{"$5,231"}</p>
                <p className={styles.tabDetailItemText4}>
                  {"41 Orders|$150 AOV"}
                </p>
              </div>
            </div>

            <div className={styles.tabDetailItem}>
              <div className={styles.tabDetailItemSection1}>
                <div className={styles.tabDetailItemImgBlock}>
                  <img
                    src={Img1}
                    alt="image"
                    className={styles.tabDetailItemImg}
                  />
                </div>
                <div className={styles.tabDetailItemContentBlock}>
                  <p className={styles.tabDetailItemText1}>
                    {"Abandoned Cart 15 Min"}
                  </p>
                  <p className={styles.tabDetailItemText2}>
                    {"4024 Sent | 124 Clicks"}
                  </p>
                </div>
              </div>
              <div className={styles.tabDetailItemSection2}>
                <p className={styles.tabDetailItemText3}>{"$24,521"}</p>
                <p className={styles.tabDetailItemText4}>
                  {"41 Orders|$150 AOV"}
                </p>
              </div>
            </div>

            <div className={styles.tabDetailItem}>
              <div className={styles.tabDetailItemSection1}>
                <div className={styles.tabDetailItemImgBlock}>
                  <img
                    src={Img1}
                    alt="image"
                    className={styles.tabDetailItemImg}
                  />
                </div>
                <div className={styles.tabDetailItemContentBlock}>
                  <p className={styles.tabDetailItemText1}>
                    {"Abandoned Cart 15 Min"}
                  </p>
                  <p className={styles.tabDetailItemText2}>
                    {"4024 Sent | 124 Clicks"}
                  </p>
                </div>
              </div>
              <div className={styles.tabDetailItemSection2}>
                <p className={styles.tabDetailItemText3}>{"$24,521"}</p>
                <p className={styles.tabDetailItemText4}>
                  {"41 Orders|$150 AOV"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.indicatorBlock}>
          <div className={styles.indicatorLevelBlock}>
            <p className={styles.indicatorLevel}>{"Level 5"}</p>
            <image
              src={Img2}
              alt="image"
              className={styles.indicatorLevelIcon}
            />
          </div>
          <p className={styles.indicatorDetails}>
            {"+$32,050 in the last month"}
          </p>
          <img src={Img1} alt="image" className={styles.indicatorImage} />
          <p className={styles.indicatorPrice}>{"$14,495"}</p>
        </div>
      </div>
    </div>
  );
}
