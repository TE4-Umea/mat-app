import React from "react";

export default async function timeDepender() {
    var today = new Date();

    if (today.getHours() >= 14) { 
        return (
            <div>
                God morgon!
            </div>
        );
    };

    if (today.getHours() >= 15) { 
        return (
            <div>
                Good middag!
            </div>
        );
    };
}