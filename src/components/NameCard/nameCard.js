import React from "react";
import styles from "./nameCard.module.css";

export default function NameCard({ id, activeNote, setActiveNote, data, setNotesData, setShouldBeVisible }) {
  const screenWidth = window.innerWidth;

  const handleClick = () => {
    setNotesData(data)
    setActiveNote(id);
    if (screenWidth <= 480) {
      setShouldBeVisible("right");
    }
  };

  const bgStyles = {
    backgroundColor: activeNote === id ? "#2F2F2F2B" : "transparent",
  };

  return (
    <div style={bgStyles} className={styles.container} onClick={handleClick}>
      <div style={{ backgroundColor: data?.selectedColor }} className={styles.initialDiv}>
        <p className={styles.initialsText}>{data?.initialLetters}</p>
      </div>
      <p className={styles.title}>{data?.grpName}</p>
    </div>
  );
}
