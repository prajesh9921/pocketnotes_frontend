import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import NotesList from "../../components/NotesList/notesList";
import NotesData from "../../components/NotesData/notesData";
import Modal from "../../components/Modal/modal";

export default function HomePage() {
  const [modal, setModal] = useState(false);
  const [notesData, setNotesData] = useState([]);
  const [shouldBeVisible, setShouldBeVisible] = useState("left");

  function isKeyInLocalStorage(key) {
    return localStorage.getItem(key) !== null;
  }

  useEffect(() => {
    const keyToCheck = "PocketNotes";
    if (isKeyInLocalStorage(keyToCheck)) {
      return;
    } else {
      localStorage.setItem(keyToCheck, JSON.stringify({ data: [] }));
    }
    setNotesData([]);
  }, []);

  return (
    <div className={styles.main}>
      <NotesList
        shouldBeVisible={shouldBeVisible}
        setShouldBeVisible={setShouldBeVisible}
        setModal={setModal}
        modal={modal}
        setNotesData={setNotesData}
      />
      <NotesData
        shouldBeVisible={shouldBeVisible}
        setShouldBeVisible={setShouldBeVisible}
        notesData={notesData}
      />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}
