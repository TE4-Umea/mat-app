import React from "react";
import { Background } from '../../storyBookComponents/background/background';


export default async function BackgroundTimeSmall() {
    var today = new Date();

    if (today.getHours() <= 15) {
        return (
            <Background size="small"></Background>
        );
    };

    if (today.getHours() >= 16) {
        return (
            <Background size="small" light={false}></Background>
        );
    };
}