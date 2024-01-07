import React from 'react'
import styles from "./BlueReceipt.module.css"
import SideBar from './SideBar'
import Profile from './Profile'
import Tabs from './Tabs';
import Graph from './Graph';
export default function BlueReceipt() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.blockOne}>
          <SideBar />
        </div>

        <div className={styles.blockTwo}>
                  <Profile />
                  <Graph/>
                  <Tabs/>
                  
        </div>
      </div>
    </div>
  );
}
