import React from "react";
import { Background } from '../storyBookComponents/background/background';


export default async function BackgroundTime() {
    var today = new Date();

    if (today.getHours() <= 15) {
        return (
            <Background></Background>
        );
    };

    if (today.getHours() >= 16) {
        return (
            <Background light={false}></Background>
        );
    };
}