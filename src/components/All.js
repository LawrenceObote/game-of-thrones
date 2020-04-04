import React from 'react';
import axios from 'axios';

function All(props) {
    function nullCheck() {
        if(props.info === null){
            return "no data";
        }
         return props.info;
    }

    let one = "http://www.anapioficeandfire.com/api/houses/17"
    let two = "http://www.anapioficeandfire.com/api/characters/901"
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    function responses() {
        axios
        .all([requestOne, requestTwo])
        .then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                
                let div0 = document.createElement("div0");
                var newContent = document.createTextNode({responseOne});
                div0.appendChild(newContent);
                let div1= document.getElementById("div1")
                document.body.insertBefore(div1, div0);
                console.log(responseOne, responseTwo);
                return responseOne;
            })
        )
        .catch(errors => {

            console.error(errors);
        });
    }

    return(
        <div>
            <h1>{responses()}</h1>
        </div>
    )
} 

export default All;