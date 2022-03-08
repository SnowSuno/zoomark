import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import logo from "../logo.png";

function Header() {


    return (
        <div className={styles.header}>
            <span>
                <img src={logo} alt="logo"/>
                <h1>Zoom Pin</h1>
            </span>
            <div className={styles.toolBar}>
                <input
                    className={classNames(styles.tool)}
                    type="text"
                />
                <button
                    className={classNames(styles.tool)}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Header;
