import React, {useRef, useState, useEffect} from "react";
import styles from "./Card.module.scss";


import {Meeting} from "../common/entities";


interface CardProps {
    meeting: Meeting;
}

function Card({meeting}: CardProps) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleClickOutside =(event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setShowMenu]);

    return (
        <div
            className={styles.card}

        >
            <div
                className={styles.clickable}
                onClick={() => console.log("clicked")}
            >
                <h1>{meeting.name}</h1>
                <p>201 223 4203</p>
            </div>


            <button
                className={styles.button}
                onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(true);
                }}
            >
                <p>&middot;&middot;&middot;</p>
            </button>
            {showMenu && <div className={styles.menu} ref={menuRef}>
                <p>수정</p>
                <p>삭제</p>
            </div>}
        </div>
    )
}

export default Card;
