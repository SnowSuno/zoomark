import React from "react";
import styles from "./Card.module.scss";


import {Meeting} from "../common/entities";


interface CardProps {
    meeting: Meeting;
}

function Card({meeting}: CardProps) {


    return (
        <div
            className={styles.card}
            onClick={() => console.log("clicked")}
        >
            <h1>{meeting.name}</h1>
            <p>201 223 4203</p>
        </div>
    )
}

export default Card;
