import React from "react";

export default async function timeDependerMiddag() {
    var today = new Date();

    if (today.getHours() < 15) { 
        return (
            <div>
                middagtext
            </div>
        );
    };


    if (today.getHours() > 16) { 
        return (
            <div>
                lunchtext
            </div>
        );
    };
}