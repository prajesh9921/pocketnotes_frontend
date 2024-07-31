import React, { useEffect, useState } from "react";
import styles from "./notesData.module.css";
import SendArrow from "../../assets/SVG/sendArrow";
import NoteCard from "../NoteCard/noteCard";
import SpalshScreen from "../SplashScreen/SplashScreen";
import BackArrow from "../../assets/SVG/backArrow";
import { AddNoteToGroup } from "../../apis/api";
import { FaShareAlt } from "react-icons/fa";

export default function NotesData({
  notesData,
  shouldBeVisible,
  setShouldBeVisible,
}) {
  const [notesList, setNotesList] = useState(notesData?.notes || []);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState(false);
  const screenWidth = window.innerWidth;

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendArrrowButton = async () => {
    const response = await AddNoteToGroup(
      setLoading,
      notesData?._id,
      userInput
    );
    setNotesList(response?.newData?.notes);
    setUserInput("");
  };

  const goBack = () => {
    setShouldBeVisible("left");
  };

  // Function to share the link
  const handleSendLink = async () => {
    const url = `https://pocketnotespng.netlify.app/notes/${notesData?._id}`;
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  useEffect(() => {
    setNotesList(notesData?.notes);
  }, [notesData]);

  const displayStyle =
    screenWidth <= 480
      ? { display: shouldBeVisible === "left" ? "none" : "flex" }
      : null;

  return (
    <div className={styles.rightMain} style={displayStyle}>
      {notesData?.length === 0 || notesData === undefined ? (
        <SpalshScreen />
      ) : (
        <>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.backBtn} onClick={goBack}>
              <BackArrow />
            </div>
            <div
              style={{ backgroundColor: notesData?.selectedColor }}
              className={styles.initialDiv}
            >
              <p className={styles.initialsText}>{notesData.initialLetters}</p>
            </div>
            <p className={styles.title}>{notesData?.grpName}</p>
            <FaShareAlt
              color="#ffffff"
              onClick={handleSendLink}
              size={24}
              style={{
                cursor: "pointer",
                marginLeft: "auto",
                marginRight: "2rem",
              }}
            />
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
