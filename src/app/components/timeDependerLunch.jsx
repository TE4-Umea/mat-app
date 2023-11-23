import React from "react";
import styles from '../page.module.css'


export default async function timeDependerLunch() {
    var today = new Date();

    if (today.getHours() < 15) {
        return (
            <div className={styles.lunchtext}>
                <a href="">Lunch</a>
            </div>
        );
    };


    if (today.getHours() > 16) {
        return (
            <div className={styles.middagtext}>
                <a href="">Lunch</a>
            </div>
        );
    };
}