import ChildComp from './Child';
import React, { Component } from 'react';

class ParentComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Parent" }
        this.handle = this.handle.bind(this)
    }
    handle() {
        alert(`Hello ${this.state.name}`)
    }
    render() {
        return (
            <div style={{margin:"50px"}}>
                <h1>Data from Parent to Child</h1>
                <ChildComp handle={this.handle} />
            </div>
        );
    }
}


// class ParentComp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handle = this.handle.bind(this)
//     }
//     handle(name) {
//         alert(`Hello ${name}`)
//     }
//     render() {
//         return (
//             <div style={{margin:"50px"}}>
//                 <h1>Data from Child to Parent</h1>
//                 <ChildComp handle={this.handle}/>
//             </div>
//         );
//     }
// }
export default ParentComp;