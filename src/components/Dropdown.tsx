import React, {useEffect, useRef} from "react";
import styles from "./Dropdown.module.scss";

export interface DropdownItem {
    name: string;
    onClick?: () => void;
}

export const Divider = "divider" as const;

interface DropdownProps {
    open: boolean;
    close: () => void;
    content: (DropdownItem | typeof Divider)[];
}

function Dropdown({open, close, content}: DropdownProps) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (open) {
            const handleClickOutside = (event: any) => {
                // console.log("click")
                if (!ref.current?.contains(event.target)) {
                    console.log("click outside")
                    close();
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
        }
        //
        
        // return () => {
        //
        // };
    }, [ref, close, open]);
    
    return (open ?
        <div className={styles.dropdown} ref={ref}>
            {content.map(item => item === Divider
                ? <hr/>
                : <button onClick={item.onClick}>{item.name}</button>
            )}
        </div> : null
    )
}

export default Dropdown;
