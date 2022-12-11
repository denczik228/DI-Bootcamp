import React from 'react'

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {msg:'', ClientMsg:''};
    }

    handleChange = (event) => {
        this.setState({ ClientMsg: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/api/word',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify({ msg: this.state.ClientMsg })

            }).then((res) => res.json())
            .then(data => this.setState(data))
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} name="msg" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>{this.state.msg}</div>
            </>
        );
    }
}

export default MyForm;