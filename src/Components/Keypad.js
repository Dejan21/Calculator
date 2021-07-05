import React from 'react';

const Keypad = ({onButtonClick}) => {
    const buttons = [
        "/",
        "*",
        "C",
        "AC",
        "7",
        "8",
        "9",
        "+",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        ".",
        "(",
        "0",
        ")",
        "=",
    ];
    return (
        <div className="Keypad">
            {buttons.map((buttonText, i) => (
             <button key={i} onClick={() => onButtonClick(buttonText)}>{buttonText} </button>
            ))}
        </div>
    );
};

export default Keypad;