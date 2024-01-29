import React from "react";
import styles from "./SplashScreen.module.css";
import BgImage from "../../assets/Images/bg-image.png";
import Lock from "../../assets/SVG/lock";

export default function SpalshScreen() {
  return (
    <div className={styles.coverContainer}>
      <div className={styles.coverImageDiv}>
        <img src={BgImage} alt="Backgroung Cover" className={styles.image}/>
        <p className={styles.title}>Pocket Notes</p>
        <p className={styles.subText}>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>

      <p className={styles.footerText}>
        <Lock /> end-to-end encrypted
      </p>
    </div>
  );
}
