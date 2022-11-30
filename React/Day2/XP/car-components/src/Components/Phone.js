import React from 'react';

class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

    changeColor = () => {
        this.setState({ color: 'white ' })
    }

    render() {
        return (
            <>
                <h3>My phone is a {this.state.brand}</h3>
                <p>It is a {this.state.color}{' '}{this.state.model} from {this.state.year}</p>
                <button onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}

export default Phone