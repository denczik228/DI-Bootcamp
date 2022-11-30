import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      languages : [
      {name: "Php", votes: 0},
      {name: "Python", votes: 0},
      {name: "JavaSript", votes: 0},
      {name: "Java", votes: 0}
    ]}
  }

  addVotes = (elem) => {
    console.log(elem);
    elem.votes++
    this.setState({languages:[...this.state.languages]})
  }

  render(){
    const {languages} =this.state
    return (
      <div>
        {
          languages.map(item=>{
            return(
              <div>
                {item.name}
                {item.votes}
                <button onClick={()=>this.addVotes(item)}>Add</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default App;
