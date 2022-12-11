import React from "react";
import data from "./Sec.json";

class Example3 extends React.Component {
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
                {data.Experiences.map((element, i) => {
                    return (
                        <div key={i}>
                            <img src={element.logo} alt="pizza1" className="item-preview" />
                            <h4>{element.companyName}</h4>
                            <h5>{element.roles.map(element =>
                                <>
                                    <p>{element.title}</p>
                                    <p>{element.startDate + element.location}</p>
                                    <p>{element.description}</p>
                                </>
                            )}</h5>
                        </div>
                    )
                })}
    
                <h1>--------------</h1>
            </>
        )
    }
}

export default Example3