import React, {useState} from "react";
import styles from "./Settings.module.scss";

import Dropdown, {Divider} from "./Dropdown";

import {ReactComponent as SettingsIcon} from "../assets/settings.svg";

function Settings() {
    const [open, setOpen] = useState(false);
    
    
    return (
        <button
            className={styles.button}
            onClick={() => setOpen(!open)}
        >
            <SettingsIcon/>
            <Dropdown
                open={open}
                close={() => setOpen(false)}
                content={[
                    {
                        name: "홈 화면에 추가",
                        onClick: undefined,
                    },
                    Divider,
                    {
                        name: "qwer",
                        onClick: undefined,
                    }
                ]}
            />
        </button>
    )
}

export default Settings;
