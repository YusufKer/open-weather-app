import React from 'react'
//This function simply displays the data which is obtained by the state of the parent component and sent down as a prop
function Result(props){
    console.log(props.data)
    return(
        <div className="output">
           {props.submit? <h2>Weather in {props.data.city}, {props.data.country} today</h2> : null }
            <p>
                temp: {props.data.temp}<br/>
                pressure: {props.data.pressure}<br/>
                humidity: {props.data.humidity}<br/>
                temp_min: {props.data.temp_min}<br/>
                temp_max: {props.data.temp_max}<br/> 
            </p> 
        </div>
    )
}

export default Result