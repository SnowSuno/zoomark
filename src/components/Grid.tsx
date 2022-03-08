import React, {useState, useCallback} from "react";
import styles from "./Grid.module.scss";

import {Meeting} from "../common/entities";
import Card from "./Card";

import update from "immutability-helper";
import Drag from "./Drag";

function Grid() {
    const [items, setItems] = useState<Meeting[]>([
        // {
        //     id: 23492384,
        //     name: "줌 회의실 1"
        // },
        {
            index: 0,
            id: 1234872,
            name: "qwer1"
        },
        {
            index: 1,
            id: 13248234,
            name: "qwer2"
        },
        {
            index: 2,
            id: 23492384,
            name: "3333"
        },
        {
            index: 3,
            id: 12343872,
            name: "일반화학"
        },
        {
            index: 4,
            id: 132482324,
            name: "4444"
        },
    ]);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setItems((prevCards: Meeting[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as Meeting],
                ],
            }),
        )
    }, [])


    return (
        <div className={styles.grid}>
            {items.map((item, index) =>
                <Drag
                    key={item.id}
                    index={index}
                    move={moveCard}
                >
                    <Card meeting={item}/>
                </Drag>)}
        </div>
    )
}

export default Grid;
