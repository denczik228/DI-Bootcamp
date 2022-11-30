import React from 'react'
import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
    }
  }

  carinfo = { name: "Ford", model: "Mustang" }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${e.target.value}`)
    }
  }
  
  clickMe = () => {
     alert('I was clicked')
  }

  render() {
    return (
      <>
        <Car car={this.carinfo} />
        <Events e={this.clickMe} handleKeyPress={this.handleKeyPress} />
        <Phone />
        <Color/>
      </>
    )
  }
}

export default App;
