import logo from './logo.svg';
import './App.css';
import React from 'react';

// class Car1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {brand: "Ford"};
//   }
//   changeBrand(){
//     this.setState({brand: "BMW"})
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Car Brand is {this.state.brand}</h1>
//         <button style={{fontSize:"2rem"}} onClick={()=>{this.changeBrand()}}>Change Brand</button>
//       </div>
//     );
//   }
// }
class Car2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Audi",
      color: "Blue",
      model: "Q8",
      year: 2022
    };
  }
  change(){
    this.setState({brand: "BMW", color:"Green", model:"R300"})
  }
  render() {
    return (
      <div style={{margin:"20px"}}>
        <h1>My Car Brand is {this.state.brand}</h1>
        <p>Its is model {this.state.model} which is {this.state.color} in color from year {this.state.year}.</p>
        <button style={{fontSize:"1.5rem"}} onClick={()=>{this.change()}}>Change</button>
      </div>
    );
  }
}

export default Car2;
