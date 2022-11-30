import React from 'react'
import { Child } from './Color';

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      show: true
    }
  }

  delete = () => {
    this.setState({ show: false });
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    let comp;
    if (this.state.show) {
      comp = <Child />;
      return (
        <>
          {comp}
          <button onClick={this.delete}>
            Delete the component
          </button>
        </>
      )
    }
    if (this.state.counter > 5) {
      throw Error(`I crashed!`)

    } return (
      <>
        <div>
          <button onClick={this.handleClick}>Counter add:{this.state.counter}</button>
        </div>
      </>
    )
  }
}

export default BuggyCounter
