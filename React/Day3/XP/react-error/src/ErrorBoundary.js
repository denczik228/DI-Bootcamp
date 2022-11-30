import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        error: null
    }
}
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error: true };
    }

    componentDidCatch(error, info) {
        //Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
       }

    // componentDidCatch = (error) => {
    // this.setState({error:this.state.error})
    // }

    render() {
        if (this.state.error) {
            return (
                <h1>its an error message</h1>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary