

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
      name: null,
      povBooks1: null,
      povBooks2: null,
      povBooks3: null
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

   async characterApiCall() {
       try{
        const res = await axios.get("http://www.anapioficeandfire.com/api/characters/232")
       } catch(e){
       console.error(e)
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
  

allPromises() {
    const promise1 = axios.get('http://www.anapioficeandfire.com/api/characters/232')
    const promise2 = axios.get('http://www.anapioficeandfire.com/api/characters/232');
    const promise3 = axios.get('http://www.anapioficeandfire.com/api/characters/232');


    const allPromises = [promise1, promise2, promise3];

    Promise.all(allPromises).then(responses => {
    


      
      
      this.setState({
          povBooks1: responses[0].data.povBooks[0],
          povBooks2: responses[1].data.povBooks[1],
          povBooks3: responses[2].data.povBooks[2]
      });
      this.povBooks();
    }).catch(e => console.error(e));
    // https://stackoverflow.com/questions/52669596/promise-all-with-axios

  }



  async povBooks() {
      try{
        const promise1 = await axios.get(this.state.povBooks1);
        const promise2 = await axios.get(this.state.povBooks2);
        const promise3 = await axios.get(this.state.povBooks3);
    
        this.setState({
            povBooks1: promise1.data.name,
            povBooks2: promise2.data.name,
            povBooks3: promise3.data.name

        })
        // this.setState({
        //     povBooks1: promise1,
        //     povBooks2: promise2,
        //     povBooks3: promise3
        // })
      } 
      catch (e){
      console.error(e);
      }
  }

  

  componentDidMount() {
    this.getHouseFounder();
    this.jonSnowBorn();
    this.margaeryTyrellBorn();
    this.regionTargaryen();
    this.houseLannister();
    this.allPromises();
    

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
          <h1>{this.state.povBooks1}</h1>
          <h1>{this.state.povBooks2}</h1>
          <h1>{this.state.povBooks3}</h1>
          
          


      </div>
    );
  }
}

export default App;