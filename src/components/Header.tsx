import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import logo from "../logo.png";

interface HeaderProps {
    openModal: () => void;
}

function Header({openModal}: HeaderProps) {


    return (
        <div className={styles.header}>
            <span>
                <img src={logo} alt="logo"/>
                <h1>디자인은 개나줘버린 Zom</h1>
                <p>(야무진 이름 추천좀)</p>
            </span>
            <div className={styles.toolBar}>
                <input
                    className={classNames(styles.tool)}
                    type="text"
                />
                <button
                    className={classNames(styles.tool)}
                    onClick={openModal}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Header;
