import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import NotesList from "../../components/NotesList/notesList";
import NotesData from "../../components/NotesData/notesData";
import Modal from "../../components/Modal/modal";
import { GetAllGroupData } from "../../apis/api";

export default function HomePage() {
  const [modal, setModal] = useState(false);
  const [notesData, setNotesData] = useState([]);
  const [shouldBeVisible, setShouldBeVisible] = useState("left");
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetGroupData = async () => {
    const res = await GetAllGroupData(setLoading); 
    setListData(res?.data);
  }

  useEffect(() => {
    GetGroupData();
  },[notesData])

  return (
    <div className={styles.main}>
      <NotesList
        shouldBeVisible={shouldBeVisible}
        setShouldBeVisible={setShouldBeVisible}
        setModal={setModal}
        modal={modal}
        setNotesData={setNotesData}
        listData={listData}
        loading={loading}
        setListData={setListData}
      />
      <NotesData
        shouldBeVisible={shouldBeVisible}
        setShouldBeVisible={setShouldBeVisible}
        notesData={notesData}
      />
      <Modal modal={modal} setModal={setModal} setListData={setListData}/>
    </div>
  );
}
