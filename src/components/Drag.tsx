import React, {ReactNode, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import type {Identifier} from 'dnd-core';

import {Meeting} from "../common/entities";


export interface DragProps {
    index: number;
    move: (dragIndex: number, hoverIndex: number) => void;
    children: ReactNode;
}

const TYPE_CARD = "card";


function Drag({index, move, children}: DragProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [{handlerId}, drop] = useDrop<Meeting,
        void,
        { handlerId: Identifier | null }>({
        accept: TYPE_CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: Meeting) {
            if (!ref.current) return

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) return

            move(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    })

    const [{isDragging}, drag] = useDrag({
        type: TYPE_CARD,
        item: {index},
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (
        <div
            ref={ref}
            data-handler-id={handlerId}
            style={{opacity}}
        >
            {children}
        </div>
    )
}

export default Drag;
