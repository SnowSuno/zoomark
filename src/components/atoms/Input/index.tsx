import React, {FormEvent} from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface InputProps {
    value: string;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    validator?: (value: string) => boolean;
    handleDisplay?: (value: string) => string;
}

const Input = ({value, onChange, validator, handleDisplay = (v) => v}: InputProps) => {

    return (
        <div className={classNames("Input", styles.container)}>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
            <p>{handleDisplay(value)}</p>
        </div>
    )
}

export default Input;
