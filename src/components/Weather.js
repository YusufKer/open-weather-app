import React from 'react'
//This function allows the user to enter a city and country.
//the users input is sent up to the parent component via the onSubmit which calls a function in the parent component
function Weather (props){
    return(
        <div className="input">
            <form onSubmit={props.submit}>
                <label>Enter Your City:</label><br/>
                <input id="city" type="text"/><br/>
                <label>Enter Your Country:</label><br/>
                <input id="country" type="text"/><br/>
                <button>Get Weather</button>
            </form>
        </div>
    )
}

export default Weather