import React from 'react';

const ChildComp = (props) => {
    return (
        <>
            <button style={{fontSize:"2rem"}} onClick={()=> props.handle('Child')}>Greet</button>
        </>
    );
}
export default ChildComp;