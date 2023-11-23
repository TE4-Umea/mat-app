import React from "react";
import styles from '../page.module.css'

export default function timeDependerMiddag() {
    var today = new Date();

    if (today.getHours() < 8) { 
        return (
            <div className={styles.middagtext}>
              <a href="">middag</a>
            </div>
        );
    } else if (today.getHours() >= 9) { 
        return (
            <div className={styles.lunchtext}>
                <a href="">Lunch</a>
            </div>
        );
    } else {
        return null;
    }
}