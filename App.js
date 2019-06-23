import React from 'react';
import Asd from "./propAssignmnet"
import childTwo from "./child"
import './App.css';
import childTwo from './child';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "white"
    }
  }
  change = (color) => {
    this.setState({
      background: color
    })
  }

  render() {

    return (
      <div className="App">
        <h3>Parent</h3>
        {/* First Assignment Start From Here */}
        {/* <div style={{backgroundColor:this.state.background, width: "800px", height: "200px", border: "1px solid blue", justifyContent: "center" }}> State Color </div>

        <span onClick={() => this.change("red")} style={{ width: "100px", height: "100px", display: "inline-block", border: "3px solid black", backgroundColor: "red" }}>Red</span>
        <span onClick={() => this.change("green")} style={{ width: "100px", height: "100px", display: "inline-block", border: "3px solid black", backgroundColor: "green" }}>Green</span>
        <span onClick={() => this.change("blue")} style={{ width: "100px", height: "100px", display: "inline-block", border: "3px solid black", backgroundColor: "blue" }}>Blue</span>
        <span onClick={() => this.change("yellow")} style={{ width: "100px", height: "100px", display: "inline-block", border: "3px solid black", backgroundColor: "yellow" }}>Yello</span> */}

        {/* <Asd abc={this.state.background} /> */}
        {/* Assignment Two Start From Here */}
        <Asd />

        <childTwo />


      </div>
    );

  }

}

export default App;
