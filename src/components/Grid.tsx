import React, {useCallback} from "react";
import styles from "./Grid.module.scss";

import {Meeting, MeetingsModifier} from "../common/entities";
import Card from "./Card";

import update from "immutability-helper";
import Drag from "./Drag";

interface GridProps {
    items: Meeting[],
    updateItems: (modifier: MeetingsModifier) => void;
}

function Grid({items, updateItems}: GridProps) {
    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        updateItems((prevCards: Meeting[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as Meeting],
                ],
            }),
        )
    }, [updateItems])


    return (
        <div className={styles.grid}>
            {items.length > 0
                ? items.map((item, index) =>
                    <Drag
                        key={item.id}
                        index={index}
                        move={moveCard}
                    >
                        <Card meeting={item}/>
                    </Drag>)
                : <div>+ 를 눌러 방을 추가해 보세여</div>
            }
        </div>
    )
}

export default Grid;
