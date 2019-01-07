import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colorArray: ['red', 'yellow', 'blue'],
      colorIdx: 0

    }
  }

  handleClick = () => {
    let { colorIdx } = this.state;
    this.setState({
      // colorIdx: Math.floor(Math.random() * colorArray.length)
      colorIdx: (colorIdx + 1) % 3
    })

  }

  render() {
    return(
      <>
      <div id="primaryColor" className={this.state.colorArray[this.state.colorIdx]}> </div>
      <button onClick={this.handleClick}>Change Color</button>
      </>
    )
  }

}

export default App;
