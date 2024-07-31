import React, { useState, useEffect } from "react";
import styles from "../../components/NotesData/notesData.module.css";
import styles2 from "./sharedscreen.module.css";
import SpalshScreen from "../../components/SplashScreen/SplashScreen";
import NoteCard from "../../components/NoteCard/noteCard";
import { GetSingleGroupData } from "../../apis/api";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

export default function SharedNotes() {
  const [notesList, setNotesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { groupid } = useParams();

  const GetGroupData = async () => {
    const resposne = await GetSingleGroupData(setLoading, groupid);
    setNotesList(resposne?.data);
  };

  useEffect(() => {
    GetGroupData();
  }, []);

  return (
    <div className={styles2.container}>
      {notesList?.length === 0 || notesList === undefined ? (
        <SpalshScreen />
      ) : (
        <div style={{display: "flex", flexDirection: 'column', width: '100%'}}>
          {/* Header */}
          <div className={styles.header}>
            <div
              style={{ backgroundColor: notesList?.selectedColor }}
              className={styles.initialDiv}
            >
              <p className={styles.initialsText}>{notesList?.initialLetters}</p>
            </div>
            <p className={styles.title}>{notesList?.grpName}</p>
          </div>

          <div className={styles.notesDiv}>
            {loading ? (
              <div>
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
              notesList?.notes?.map((item, index) => (
                <NoteCard data={item} key={index} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
