// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    // Define the initial state
    this.state = {
      count: 0
    }
  }
  timesClicked = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return(
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.timesClicked}>Click Me!</button>
      </div>
    )
  }
}

export default DigitalClicker;
