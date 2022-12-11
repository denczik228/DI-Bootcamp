import React from "react";
import data from "./Sec.json";

class Example1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };
    }

    componentDidMount() {
        fetch(data)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                })
            })
    }

    render() {

        return (
            <>
            <h1>--------------</h1>
            <div>{data.SocialMedias.map(element =>
                <> 
            <h3>{element}</h3>
                </>
            )}
                </div>
            </>
        )
    }
}

export default Example1