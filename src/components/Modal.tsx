import React from "react";
import styles from "./Modal.module.scss";
import NumberFormat from "react-number-format";

interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const zoomIdFormat = (value: string): string => {
    return [
        value.substring(0, 3)
    ].concat(value.length < 11
        ? [
            value.substring(3, 6),
            value.substring(6, 10),
        ]
        : [
            value.substring(3, 7),
            value.substring(7, 11),
        ]
    ).filter(
        value => value.length > 0
    ).join(" ");
};


function Modal({open, setOpen}: ModalProps) {
    return (open ?
        <div
            className={styles.wrapper}
            onClick={() => setOpen(false)}
        >
            <div
                className={styles.modal}
                onClick={e => e.stopPropagation()}
            >
                회의실 이름
                <input type="text"/>
                회의실 주소
                <NumberFormat
                    // format="### ### ####"
                    format={zoomIdFormat}
                />
                비밀번호
                <input type="text"/>
                입장 시 이름 설정
                <input type="text"/>
                <div className={styles.buttonWrapper}>
                    <button>취소</button>
                    <button>추가</button>
                </div>
            </div>
        </div>
    : null)
}

export default Modal;
