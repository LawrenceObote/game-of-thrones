import React from 'react';

function TargaryenRegion(props) {
    function nullCheck() {
        if(props.info === null){
            return "no data";
        }
         return props.info;
    }

    return(
        <div>
            <h1>{nullCheck().region}</h1>
        </div>
    )
} 

export default TargaryenRegion;