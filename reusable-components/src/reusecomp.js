import React from 'react';

const Reuse = ({ color, name, handle }) => {
    return (
        <div>
            <button style={{ backgroundColor: color, marginTop: "100px", fontSize: "2rem", border: "5px solid black" }} onClick={handle}>{name}</button>
        </div>
    );
    ;
}
export default Reuse;