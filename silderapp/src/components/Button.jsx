import React from "react";
import './Button.css'

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="btn1">
            {children}
        </button>
    );
}

export default Button;
