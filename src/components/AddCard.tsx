import React from "react";
import styles from "./AddCard.module.scss";
import {ReactComponent as AddIcon} from "../assets/add.svg";

interface AddCardProps {
    openModal: () => void;
}

function AddCard({openModal}: AddCardProps) {
    
    return (
        <div
            className={styles.card}
            onClick={openModal}
        >
             <AddIcon/>
            <p>북마크 추가</p>
        </div>
    )
}

export default AddCard;
