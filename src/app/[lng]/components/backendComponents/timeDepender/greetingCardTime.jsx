import React from "react";
import { GreetingCard } from '../../storyBookComponents/greetingCard/greetingCard';

export default async function GreetingCardTime() {
    var today = new Date();

    if (today.getHours() <= 15) {
        return (
            <GreetingCard></GreetingCard>
        );
    };

    if (today.getHours() >= 16) {
        return (
            <GreetingCard dark={true}></GreetingCard>
        );
    };
}