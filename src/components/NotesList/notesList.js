import React, { useState } from "react";
import styles from "./notesList.module.css";
import NameCard from "../NameCard/nameCard";
import { TailSpin } from "react-loader-spinner";
import { FaSearch } from "react-icons/fa";

export default function NotesList({
  setModal,
  setNotesData,
  modal,
  shouldBeVisible,
  setShouldBeVisible,
  listData,
  loading,
  setListData
}) {
  const [activeNote, setActiveNote] = useState("");
  const screenWidth = window.innerWidth;

  const showModel = () => {
    setModal(true);
  };

  const displayStyle =
    screenWidth <= 480
      ? { display: shouldBeVisible === "right" ? "none" : "flex" }
      : null;

   const searchGroups = (e) => {
    const filteredData = listData.filter(item => item?.grpName.toLowerCase().includes(e.target.value.toLowerCase()))
    setListData(filteredData);
   }

  return (
    <div className={styles.leftMain} style={displayStyle}>
      <div className={styles.titleHolder}>
        <p className={styles.pocketNote}>Pocket Notes</p>
        <div className={styles.searchbar}>
          <input onChange={searchGroups} type="text" placeholder="Search group"/>
          <FaSearch color="grey" size={24}/>
        </div>
      </div>

      <div className={styles.renderListDiv}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <TailSpin
              visible={true}
              height="50"
              width="50"
              radius="1"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
            />
          </div>
        ) : (
          listData?.map((item, index) => (
            <NameCard
              key={item._id}
              setShouldBeVisible={setShouldBeVisible}
              setNotesData={setNotesData}
              data={item}
              id={index}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
            />
          ))
        )}
      </div>

      <div className={styles.fab} onClick={showModel}>
        <p className={styles.fabText}>+</p>
      </div>
    </div>
  );
}
