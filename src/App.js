

import React from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import HouseStarkFounder from './components/HouseStarkFounder.js';
import Tyrell from './components/Tyrell.js';
import TargaryenRegion from './components/TargaryenRegion.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: null,
      houses: null,
      starkFounder: null,
      born: null,
      birthPlace: null,
      region: null
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
  

  

  componentDidMount() {
    this.getHouseFounder();
    this.jonSnowBorn();
    this.margaeryTyrellBorn();
    this.regionTargaryen();
  }

  render() {
    return (
      <div className="App">
          <HouseStarkFounder info={ this.state.starkFounder } />
          <Character info={ this.state.born } />
          <Tyrell info={ this.state.birthPlace }/>
          <TargaryenRegion info={ this.state.region}></TargaryenRegion>

      </div>
    );
  }
}

export default App;