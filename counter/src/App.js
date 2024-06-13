import logo from './logo.svg';
import './App.css';
import React,{useState, Component} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increase= ()=>{
    setCount(count+1)
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increase}>Increase</button>
    </>
  );
}

class ClassComponent extends React.Component{
  constructor(){
    super();
    this.state={count:0}
    this.increase=this.increase.bind(this)
  }
  increase(){
    this.setState={count:this.state.count+1}
  }
  render(){
    return(
      <>
    <h1>{this.state.count}</h1>
    <button onClick={this.increase}>Increase</button>
    </>
    );
  }
}

export default App;
