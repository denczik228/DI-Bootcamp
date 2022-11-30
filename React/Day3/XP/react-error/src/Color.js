import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        alert('The component is going to be unmounted');
    }

    render() {
        console.log("Inside render");
        return (
            <header>Hello World!</header>
        )
    }
}

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: "red"
        };
    }

    shouldComponentUpdate (prevProps, prevState) {
        if(prevState.favoriteColor !== this.state.favoriteColor) {
                return true;
        }
        else {
                return false;
        }
}

    componentDidMount() {
        console.log('3 componentDidMount');
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow ' })
        }, 5000)
    }

    componentDidUpdate(prevProps, prevState) {
        document.getElementById('color').innerHTML =
            'My Favorite color is' + ' ' + this.state.favoriteColor;
    }
    
        getSnapshotBeforeUpdate(prevProps, prevState) {
            if (prevState.favoriteColor !== this.state.favoriteColor) {
                document.getElementById('prevcol').innerHTML = 'Before the update, the favorite was' + ' ' + prevState.favoriteColor;
            }
            return (
                document.getElementById('newcol').innerHTML = 'The updated favorite is' + ' ' + this.state.favoriteColor
        )
        }
        
    render() {
        console.log("Inside render");
        return (
            <div>
                <h1>Component : {this.state.favoriteColor}</h1>
                <button onClick={() => {
                    this.setState({ favoriteColor: 'pink' })
                }}>Update</button>
                <div id="color"></div>
                <div id='prevcol'></div>
                <div id='newcol'></div>
            </div>
        )
    }
}

export {Color,Child} 

