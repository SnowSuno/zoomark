import React, {useCallback, useState} from "react";
import styles from "./Modal.module.scss";
import NumberFormat from "react-number-format";

import useInput from "../common/useInput";
import {zoomIdFormatter} from "../common/utils";
import {useDispatch} from "react-redux";
import {addMeeting} from "../reducers/meetings";

interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

function Modal({open, setOpen}: ModalProps) {
    const dispatch = useDispatch();

    const {input: name} = useInput("");
    const [meetingId, setMeetingId] = useState<number>(0);
    const {input: password} = useInput("");
    const {input: username} = useInput("");

    const validate = useCallback(() => {
        return name.value.length > 0 && String(meetingId).length >= 10
    }, [name.value, meetingId]);

    const add = () => {
        if (validate()) {
            dispatch(addMeeting({
                name: name.value,
                meetingId: meetingId,
                password: password.value || undefined,
                username: username.value || undefined,
            }));
        }
    };

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
                <input type="text" {...name} />
                회의실 주소
                <NumberFormat
                    // format="### ### ####"
                    format={zoomIdFormatter}
                    onValueChange={({value}) => setMeetingId(Number(value))}
                />
                비밀번호
                <input type="password" {...password}/>
                입장 시 이름 설정
                <input type="text" {...username}/>
                <div className={styles.buttonWrapper}>
                    <button>취소</button>
                    <button
                        onClick={add}
                        disabled={!validate()}
                    >추가</button>
                </div>
            </div>
        </div>
    : null)
}

export default Modal;
