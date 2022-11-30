import React from 'react';
import Garage from './Garage';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "white" };
    }
    render() {
        return (
        <>
        <header>This car is {this.state.color}{' '}{this.props.car.model}</header>
         <Garage size="small" />
      </>
    )}
}

export default Car