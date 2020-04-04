import React from 'react'

function Pov1(props) {
    function nullCheck() {
        if(props.info === null) {
            return "no data";
        }
        return props.info;
    }
    return (
        <div>
            <h1>{ nullCheck().povBooks[0] }</h1>
        </div>
    )
}

export default Pov1;