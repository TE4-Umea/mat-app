import React from "react";
import styles from '../page.module.css'

export default function timeDependerMiddag() {
    var today = new Date();

    if (today.getHours() < 15) { 
        return (
            <div className={styles.lunchtext}>
              <a href="">Lunch</a>
            </div>
        );
    } else if (today.getHours() >= 16) { 
        return (
            <div className={styles.middagtext}>
                <a href="">Lunch</a>
            </div>
        );
    } else {
        return null;
    }
}