import React from "react";
import styles from '../../page.module.css'

export default function timeDependerLunch() {
    var today = new Date();

    if (today.getHours() <= 15) {
        return (
            <div className={styles.secondaryButtonTime}>
                <a href="">Middag</a>
            </div>
        );
    } else if (today.getHours() >= 16) {
        return (
            <div className={styles.secondaryButtonTime}>
                <a href="">Lunch</a>
            </div>
        );
    } else {
        return null;
    }
}