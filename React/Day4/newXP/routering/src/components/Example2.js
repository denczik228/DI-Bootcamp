import React from "react";
import data from "./Sec.json";

class Example2 extends React.Component {
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
                <div>{data.Skills.map(element =>
                    <>
                        <h3>{element.Area}</h3>
                        <h5>{element.SkillSet.map(element =>
                            <p>{ element.Name}</p>
                            )}</h5>
                    </>
                )}
                </div>
                <h1>--------------</h1>
            </>
        )
    }
}

export default Example2