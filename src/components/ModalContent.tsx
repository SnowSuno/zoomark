import React, {useCallback, useState} from "react";
import styles from "./Modal.module.scss";

import {useDispatch} from "react-redux";
import useInput from "../common/useInput";
import {addMeeting} from "../reducers/meetings";

import NumberFormat from "react-number-format";
import {zoomIdFormatter} from "../common/utils";

interface ModalContentProps {
    close: () => void;
}

function ModalContent({close}: ModalContentProps) {
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


    return (
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
            비밀번호(선택)
            <input type="password" {...password}/>
            입장 시 이름 설정(선택)
            <input type="text" {...username}/>
            <div className={styles.buttonWrapper}>
                <button onClick={close}>
                    취소
                </button>
                <button
                    onClick={() => {
                        add();
                        close();
                    }}
                    disabled={!validate()}
                >
                    추가
                </button>
            </div>
        </div>
    )
}

export default ModalContent;
