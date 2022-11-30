import React from 'react';


class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <>
        <div>
        <button onClick={this.props.e}>Click on Alert</button>
        </div>        
        <input type='text' onKeyPress={this.props.handleKeyPress} placeholder='Press the enter key'/>
        <div>
        Exercise 9:<button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
        </>
        )
    }
}

export default Events