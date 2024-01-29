import React, { useState, useEffect } from 'react';
import styles from "./notesList.module.css";
import NameCard from '../NameCard/nameCard';

export default function NotesList({ setModal, setNotesData, modal, shouldBeVisible, setShouldBeVisible}) {
  const [activeNote, setActiveNote] = useState("");
  const [listData, setListData] = useState([]);
  const screenWidth = window.innerWidth;

  const showModel = () => {
    setModal(true);
  }

  useEffect(() => {
    const res = localStorage.getItem('PocketNotes');
    const data = JSON.parse(res);
    setListData(data.data);
  },[modal, activeNote, shouldBeVisible])

  const displayStyle = screenWidth <= 480 ? {display: shouldBeVisible === "right" ? 'none' : 'flex'} : null

  return (
    <div className={styles.leftMain} style={displayStyle}>
        <div className={styles.titleHolder}>
          <p className={styles.pocketNote}>Pocket Notes</p>
        </div>

        <div className={styles.renderListDiv}>
          {listData.map((item, index) => <NameCard key={item.id} setShouldBeVisible={setShouldBeVisible} setNotesData={setNotesData} data={item} id={index} activeNote={activeNote} setActiveNote={setActiveNote}/>)}
        </div>

        <div className={styles.fab} onClick={showModel}>
          <p className={styles.fabText}>+</p>
        </div>
    </div>
  );
}