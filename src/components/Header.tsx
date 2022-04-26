import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import logo from "../logo.png";
import logoText from "../assets/logo.svg";

import settings from "../assets/settings.svg";

interface HeaderProps {
    openModal: () => void;
}

function Header({openModal}: HeaderProps) {


    return (
        <div className={styles.header}>
            <span>
                <img src={logo} alt="logo"/>
                <img src={logoText} alt="logotext"/>
                {/*<h1>Zoomarks</h1>*/}
            </span>
            {/*<div className={styles.toolBar}>*/}
            {/*    <input*/}
            {/*        className={classNames(styles.tool)}*/}
            {/*        type="text"*/}
            {/*    />*/}
            {/*    <button*/}
            {/*        className={classNames(styles.tool)}*/}
            {/*        onClick={openModal}*/}
            {/*    >*/}
            {/*        +*/}
            {/*    </button>*/}
            {/*</div>*/}
            <img src={settings} alt=""/>
        </div>
    )
}

export default Header;
