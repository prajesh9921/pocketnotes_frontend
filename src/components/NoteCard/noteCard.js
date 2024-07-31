import React from "react";
import Dot from "../../assets/SVG/dot";
import styles from "./noteCard.module.css";
import moment from "moment";

export default function NoteCard({data}) {
  return (
    <div className={styles.container}>
      <p className={styles.noteText}>
        {data?.value}
      </p>
      <p className={styles.dateTime}>{moment(data?.createdAt).format("DD MMM YYYY")} <Dot/> {moment(data?.createdAt).format("hh:mm a")} </p>
    </div>
  );
}
