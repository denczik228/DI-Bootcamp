import React from 'react';

class Garage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <>Who lives in my {this.props.size} Garage? </>
    }
}

export default Garage