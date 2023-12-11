import React from 'react';
import './planCarouselCard.css';
import '/src/app/globals.css';

interface ButtonProps {
    lunch: boolean;
}

export const CarouselCard = ({
    lunch = true
}: ButtonProps) => {
    const mode = lunch ? 'buttonLunch' : 'buttonDinner';
    const mode1 = lunch ? 'buttonDinner' : 'buttonLunch';
    var today = new Date();

    function modeTime() {
        if (today.getHours() <= 15) {
            lunch = true;
        };

        if (today.getHours() >= 16) {
            lunch = false;
        };
        return lunch;
    }
    return (
        <div className={['planCarouselCard'].join(' ')}>
            <div>
                <p>Kladdig pizza med bearnaise sås</p>
                {modeTime() && (<div className={['buttonContainer', mode].join(' ')}>
                    <button>Lunch</button>
                    <button>Middag</button>
                </div>
                )}
                {!modeTime() && (<div className={['buttonContainer', mode1].join(' ')}>
                    <button>Lunch</button>
                    <button>Middag</button>
                </div>
                )}
            </div>
            {/* <img src='src/stories/assets/github.svg'></img> */}
        </div>
    );
};


