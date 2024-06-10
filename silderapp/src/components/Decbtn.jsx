import React from "react";
import './Decbtn.css'
function Decbtn({ onClick, children }){
    return(<div>
        <button onClick={onClick} className="btn2">{children}
        </button>
    </div>)
}

export default Decbtn;