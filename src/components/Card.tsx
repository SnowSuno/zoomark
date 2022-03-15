import React, {useRef, useState, useEffect} from "react";
import styles from "./Card.module.scss";

import {zoomIdFormatter} from "../common/utils";


import {Meeting} from "../common/entities";
import {useDispatch} from "react-redux";
import {deleteMeeting} from "../reducers/meetings";


interface CardProps {
    meeting: Meeting;
}

function Card({meeting}: CardProps) {
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const deleteSelf = () => {
        dispatch(deleteMeeting(meeting));
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
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
                <p>{zoomIdFormatter(meeting.meetingId.toString())}</p>
                <div className={styles.indicators}>
                    <div>{meeting.password && `🔑 ${meeting.password}`}</div>
                    <div>{meeting.username && `👤 ${meeting.username}`}</div>
                </div>
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
                <p onClick={deleteSelf}>삭제</p>
            </div>}
        </div>
    )
}

export default Card;
