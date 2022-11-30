import React from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: "red"
        };
    }

    componentDidMount() {
        console.log('3 componentDidMount');
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow ' })
        }, 5000)
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'blue' })
    }

    render() {
        return (
            <>
                <header>My favorite Color is {this.state.favoriteColor}</header>
                 My favorite color is { this.setState.favoriteColor}<button onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}

export default Color