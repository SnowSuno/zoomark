import React, {useState} from "react";
import styles from "./Grid.module.scss";

import {Meeting} from "../common/entities";
import Card from "./Card";

function Grid() {
    const [items, setItems] = useState<Meeting[]>([
        {
            id: 23492384,
            name: "줌 회의실 1"
        },
        {
            id: 1234872,
            name: "일반화학"
        },
        {
            id: 13248234,
            name: "영ㅇ어"
        },
        {
            id: 23492384,
            name: "줌 회의실 1"
        },
        {
            id: 1234872,
            name: "일반화학"
        },
        {
            id: 13248234,
            name: "영ㅇ어"
        },
    ]);


    return (
        <div className={styles.grid}>
            {items.map(item => <Card meeting={item}/>)}
        </div>
    )
}

export default Grid;
