import React from "react";
import styles from "./Modal.module.scss";


import ModalContent from "./ModalContent";

interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

function Modal({open, setOpen}: ModalProps) {
    const close = () => setOpen(false);

    return (open ?
        <div
            className={styles.wrapper}
            onClick={close}
        >
            <ModalContent close={close}/>
        </div>
    : null)
}

export default Modal;
