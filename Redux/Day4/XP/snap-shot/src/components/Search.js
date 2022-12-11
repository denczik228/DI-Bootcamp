import React from "react";

const handleSubmit = (e) => {
    e.preventDefault()
    inputField = e.target.value
}

export const Search = () => {
    return(
    <form style= {{textAlign:"center"}}>
        <input name='search' type='text' placeholder='Search'/>
        <button onClick={handleSubmit}>O-</button>
    </form>
    )

}