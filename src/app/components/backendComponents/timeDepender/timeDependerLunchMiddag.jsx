import React from "react";
import styles from '../../../page.module.css'
import { CarouselCard } from '../../storyBookComponents/cards/planCarouselCard/planCarouselCard'

export default function timeDependerLunchMiddag() {
    var today = new Date();

    if (today.getHours() <= 15) {
        return (
            <CarouselCard />

        );
    } else if (today.getHours() >= 16) {
        return (
            <CarouselCard />
        );
    } else {
        return null;
    }
}