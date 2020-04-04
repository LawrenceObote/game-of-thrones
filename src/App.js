

import React from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import HouseStarkFounder from './components/HouseStarkFounder.js';
import Tyrell from './components/Tyrell.js';
import TargaryenRegion from './components/TargaryenRegion.js';
import Lannister from './components/Lannister.js';
import All from './components/All'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: null,
      houses: null,
      starkFounder: null,
      born: null,
      birthPlace: null,
      region: null,
      coat: null,
      seats: null,
      aliases: null,
      name: null
    };
  }

  async getHouseFounder() {
    try {
      const house = await axios.get('http://www.anapioficeandfire.com/api/houses/362');
      // this.setState({ starkHouse: house.data });
      // house.data.founder === link === string
      const founder = await axios.get(house.data.founder);
       console.log("datas --->", house)
      this.setState({ starkFounder: founder.data })
    } catch(e) {
      console.error(e);
    }
  }

  async jonSnowBorn() {
      try {
          const character = await axios.get('https://anapioficeandfire.com/api/characters/583');
          console.log("data---->", character)
        
          this.setState({ born: character.data })
      } catch(e) {
            console.error(e);
          }
      }

   async margaeryTyrellBorn() {
       try {
           const birthPlace = await axios.get('http://anapioficeandfire.com/api/characters/16');
            this.setState({ birthPlace: birthPlace.data })
       } catch(e) {
           console.error(e);
       }
   }

   async regionTargaryen() {
       try {
           const region = await axios.get('http://www.anapioficeandfire.com/api/houses/378');
           console.log("data---->", region)
           this.setState({ region: region.data })
       }    catch(e) {
           console.error(e);
       }
   }

   async houseLannister() {
       try{
           const coatOfArms = await axios.get('http://www.anapioficeandfire.com/api/houses/229');
           console.log("data--->>", coatOfArms);
           this.setState({coat: coatOfArms.data});
       }    catch(e) {
           console.error(e);
       }
   }



//    function responses () {
//     const requestOne = axios.get(one);
//     const requestTwo = axios.get(two);

//     axios
//         .all([requestOne, requestTwo])
//         .then(
//             axios.spread((...responses) => {
//                 const responseOne = responses[0];
//                 const responseTwo = responses[1];
//                 return <h1>{responseOne}</h1>;
//                 console.log(responseOne, responseTwo);
//             })
//         )
//         .catch(errors => {

//             console.error(errors);
//         });
//    }
  



  

  componentDidMount() {
    this.getHouseFounder();
    this.jonSnowBorn();
    this.margaeryTyrellBorn();
    this.regionTargaryen();
    this.houseLannister();

    let one = "http://www.anapioficeandfire.com/api/houses/17"
    let two = "http://www.anapioficeandfire.com/api/characters/901"
    let three = "http://www.anapioficeandfire.com/api/houses/362"

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

    axios
        .all([requestOne, requestTwo, requestThree])
        .then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                const responseThree = responses[2];

                    
                this.setState({
                    seats: responseOne.data.seats[1],
                    aliases: responseTwo.data.aliases[0],
                    name: responseThree.data.founder
                })
            })
        )
        .catch(errors => {

            console.error(errors);
        });
  }

  render() {
    return (
      <div className="App">
          <Character info={ this.state.born } />
          <Tyrell info={ this.state.birthPlace }/>
          <TargaryenRegion info={ this.state.region}></TargaryenRegion>
          <Lannister info = {this.state.coat} />
          <h1>{this.state.seats}</h1>
          <h1>{this.state.aliases}</h1>
          <HouseStarkFounder info={ this.state.starkFounder } />
          
          


      </div>
    );
  }
}

export default App;