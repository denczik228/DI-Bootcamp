import React from "react"

const Robots = (props) => {
    const {robots} = props
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5">
            <img src={`http://robohash.org/${robots.id}?size=150x150`}/>
            <h2>{robots.name}</h2>
            <h4>{robots.username}</h4>
            <p>{robots.email}</p>
        </div>
    )
}
export default Robots