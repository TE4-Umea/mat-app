import React from "react";

export default async function timeDependerLunch() {
    var today = new Date();

    if (today.getHours() < 15) { 
        return (
            <div>
                lunchtext
            </div>
        );
    };


    if (today.getHours() > 16) { 
        return (
            <div>
                middagtext
            </div>
        );
    };
}