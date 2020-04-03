import React from 'react';

function Lannister(props) {
    function nullCheck() {
        if(props.info === null){
            return "no data";
        }
         return props.info;
    }

    return(
        <div>
            <h1>{nullCheck().coatOfArms}</h1>
        </div>
    )
} 

export default Lannister;