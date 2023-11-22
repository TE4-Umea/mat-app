import React from "react";

export default async function timeDepender() {
    var today = new Date();

    if (today.getHours() >= 14) { 
        return (
            <div>
                <h1>Good morning!</h1>
            </div>
        );
    };

    if (today.getHours() >= 15) { 
        return (
            <div>
                <h1>Good afternoon!</h1>
            </div>
        );
    };
}