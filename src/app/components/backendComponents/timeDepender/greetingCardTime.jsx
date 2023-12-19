import React from "react";
import { GreetingCard } from '../../storyBookComponents/greetingCard/greetingCard';

export const GreetingCardTime = async ({ lng }) => {
    var today = new Date();

    if (today.getHours() <= 15) {
        return (
            <GreetingCard lng={lng} dark={false}></GreetingCard>
        );
    };

    if (today.getHours() >= 16) {
        return (
            <GreetingCard lng={lng} dark={true}></GreetingCard>
        );
    };
}