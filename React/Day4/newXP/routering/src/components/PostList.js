import React from "react";
import data from "./Data.json";

class PostList extends React.Component {
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
            }) }

    render() {

        return (
            <div>{data.map(element =>
                <>
                <h3>{element.id}</h3>
                <h1>{element.title}</h1>
                <h3>{element.content}</h3>
                </>
           ) }
            </div>
    )}
}

export default PostList