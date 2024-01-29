import React, { useEffect, useState } from "react";
import styles from "./notesData.module.css";
import SendArrow from "../../assets/SVG/sendArrow";
import NoteCard from "../NoteCard/noteCard";
import SpalshScreen from "../SplashScreen/SplashScreen";
import BackArrow from "../../assets/SVG/backArrow";

export default function NotesData({
  notesData,
  shouldBeVisible,
  setShouldBeVisible,
}) {
  const [notesList, setNotesList] = useState(notesData.notes);
  const [userInput, setUserInput] = useState();
  const screenWidth = window.innerWidth;

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const getCurrentDateandTime = () => {
    const currentDate = new Date();
    const isoFormattedDate = currentDate.toISOString();
    return isoFormattedDate;
  };

  // this function adds new note to the notes list;
  const handleSendArrrowButton = () => {
    const res = localStorage.getItem("PocketNotes");
    const allData = JSON.parse(res);

    const timeStamp = getCurrentDateandTime();
    const val = { value: userInput, timeStamp: timeStamp };
    setNotesList((prev) => [...prev, val]);

    allData.data.forEach((item, index) => {
      if (item.id === notesData.id) {
        item.notes = [...notesList, val];
      }
    });

    localStorage.setItem("PocketNotes", JSON.stringify(allData));

    setUserInput("");
  };

  const goBack = () => {
    setShouldBeVisible("left");
  }

  useEffect(() => {
    setNotesList(notesData.notes);
  }, [notesData]);

  const displayStyle =
    screenWidth <= 480
      ? { display: shouldBeVisible === "left" ? "none" : "flex" }
      : null;

  return (
    <div className={styles.rightMain} style={displayStyle}>
      {notesData.length === 0 || notesData === undefined ? (
        <SpalshScreen />
      ) : (
        <>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.backBtn} onClick={goBack}>
              <BackArrow />
            </div>
            <div
              style={{ backgroundColor: notesData?.color }}
              className={styles.initialDiv}
            >
              <p className={styles.initialsText}>{notesData.initialLetters}</p>
            </div>
            <p className={styles.title}>{notesData.title}</p>
          </div>

          <div className={styles.notesDiv}>
            {notesList?.map((item, index) => (
              <NoteCard data={item} key={index} />
            ))}
          </div>

          {/* Input Box */}
          <div className={styles.inputMain}>
            <div>
              <textarea
                name="notes"
                rows="8"
                placeholder="Enter your text here........."
                className={styles.textarea}
                onChange={handleInput}
                value={userInput}
              ></textarea>
              {userInput ? (
                <SendArrow onClick={handleSendArrrowButton} />
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
