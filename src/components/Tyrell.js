import React from 'react'

function Tyrell(props) {
    function nullCheck() {
        if(props.info === null) {
            return "no data";
        }
        return props.info;
    }
    return (
        <div>
            <h1>{ nullCheck().born }</h1>
        </div>
    )
}

export default Tyrell;