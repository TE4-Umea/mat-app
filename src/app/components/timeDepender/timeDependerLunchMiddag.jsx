import React from "react";
import styles from '../../page.module.css'
import { Card as PlanCarousel } from '../storyBookComponents/cards/planCarouselCard/planCarouselCard'

export default function timeDependerLunchMiddag() {
    var today = new Date();

    if (today.getHours() <= 15) {
        return (
            <PlanCarousel />

        );
    } else if (today.getHours() >= 16) {
        return (
            <PlanCarousel />
        );
    } else {
        return null;
    }
}