import React from "react";
import styles from "./Card.module.scss";


import {Meeting} from "../common/entities";


interface CardProps {
    meeting: Meeting;
}

function Card({meeting}: CardProps) {


    return (
        <div className={styles.card}>
            {meeting.name}
        </div>
    )
}

export default Card;
