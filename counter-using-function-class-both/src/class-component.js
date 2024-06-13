import './App.css';
import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    increment() {
        this.setState((prevState)=> ({count: prevState.count+1}));
    }

    decrement() {
        if(this.state.count>0){
        this.setState((prevState)=> ({count: prevState.count-1}));
        }
        else{alert("Count cannot be negative")}
    }
    render() {
        return (
            <div className="App" >
                <h2>Class Component</h2>
                <div className='posi'>
                    <button onClick={()=>{this.increment()}}>Increment</button>
                    <button onClick={()=>{this.decrement()}}>Decrement</button>
                </div>
                <h2>Count is {this.state.count}</h2>
            </div>
        );
    }
}
export default Counter;