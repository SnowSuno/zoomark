import React, {useState, useCallback} from "react";
import styles from "./Grid.module.scss";

import {Meeting} from "../common/entities";
import Card from "./Card";

import update from "immutability-helper";
import Drag from "./Drag";

function Grid() {
    const [items, setItems] = useState<Meeting[]>([
        {
            id: "awer32rwdfwe32",
            index: 0,
            meetingId: 2316641223,
            name: "일반화학 I"
        },
        {
            id: "adsf2rwdsdffwe32",
            index: 1,
            meetingId: 2316641223,
            name: "시스템 프로그래밍"
        }
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
