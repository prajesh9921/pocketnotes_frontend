import React, { useState } from "react";
import styles from "./modal.module.css";
import {
  Color1,
  Color2,
  Color3,
  Color4,
  Color5,
  Color6,
} from "../../assets/SVG/svgs";
import { AddGroup } from "../../apis/api";

export default function Modal({ modal, setModal, setListData }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [groupName, setGroupName] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleGroupName = (event) => {
    setGroupName(event.target.value);
  };

  const colors = [
    {
      id: 1,
      card: Color1,
      color: "#B38BFA",
    },
    {
      id: 2,
      card: Color2,
      color: "#FF79F2",
    },
    {
      id: 3,
      card: Color3,
      color: "#43E6FC",
    },
    {
      id: 4,
      card: Color4,
      color: "#F19576",
    },
    {
      id: 5,
      card: Color5,
      color: "#0047FF",
    },
    {
      id: 6,
      card: Color6,
      color: "#6691FF",
    },
  ];

  const getInitialLetters = () => {
    if (groupName) {
      // Converting sentence to list separated by spaces
      const words = groupName.split(" ");
      let initialLetters;

      // Handeling edge case for only 1 word
      if (words.length === 1) {
        initialLetters = [
          words[0][0].toUpperCase(),
          words[0][words[0].length - 1].toUpperCase(),
        ];
      } else {
        initialLetters = words.slice(0, 2).map((word) => word[0].toUpperCase());
      }
      const result = initialLetters.join("");
      return result;
    }
  };

  const handleCreateButton = async () => {
    const initialLetters = getInitialLetters();
    if (selectedColor && groupName) {
      const response = await AddGroup(setLoading, groupName, initialLetters, selectedColor);
      setListData((prev) => [...prev, response?.result]);
      setSelectedColor("");
      setGroupName("");
      toggleModal();
    } else {
      toggleModal();
      return alert("Please enter group name and select color");
    }
  };

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalcontent}>
            <h2>Create New group</h2>
            <div className={styles.groupNameDiv}>
              <p className={styles.label}>Group Name</p>
              <input
                type="text"
                placeholder="Enter group name"
                className={styles.input}
                onChange={handleGroupName}
              />
            </div>

            <div className={styles.chooseColorDiv}>
              <p className={styles.label}>Choose Color</p>
              <div className={styles.colorCards}>
                {colors.map((item) => (
                  <ColorCard
                    color={item}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                ))}
              </div>
            </div>

            <button className={styles.closemodal} onClick={handleCreateButton}>
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const ColorCard = ({ color, selectedColor, setSelectedColor }) => {
  const selectColor = () => {
    setSelectedColor(color.color);
  };
  return (
    <div
      onClick={selectColor}
      className={selectedColor === color.color ? styles.colorCardDiv : styles.colorCardDiv1}
    >
      <color.card />
    </div>
  );
};
