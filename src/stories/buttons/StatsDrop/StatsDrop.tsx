import './StatsDrop.css'
import '/src/app/globals.css'

import React from 'react'

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function click() {
//     document.getElementById("myDropdown").classList.toggle("show");
//     document.getElementById("image").classList.toggle("rotate");

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var image = document.getElementById("image");
//     if (image.classList.contains('rotate')) {
//         image.classList.remove('rotate');
//     }
//     for (var i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//         }
//     }
// }

interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * Button contents
     */
    options: string[]
    /**
     * Optional click handler
     */
    droppingDown: () => void
}

export const Button = ({
    backgroundColor,
    options,
    droppingDown,
    ...props
}: ButtonProps) => {
    return (
        <select className={['StatsDrop'].join(' ')}>
            {options.map((options) => (
                <option key={options} value={options}>
                    {options}
                </option>
            ))}
        </select>

        // <button onClick={droppingDown} className="dropDown">
        //     <img id='image' src='https://media.discordapp.net/attachments/403937823608143890/1168205321488060426/latest.png?ex=6575d4fc&is=65635ffc&hm=3a546277bd8c6c5db355d09f1ca1037407c33d95f3bd6f143bfeecfa4a6f71c7&=&format=webp&quality=lossless'></img>
        //     Dropdown
        //     <div id="myDropdown" className="dropdownContent">
        //         {options.map((options) => <a key={options}>{options}</a>)}
        //     </div>
        // </button>
    )
}
