import React from 'react'

import './App.css'

import Weather from './components/Weather'
import Result from './components/Result'
//I've created variables called city, country, and API. I will allow the user to input city and country and then structure the api call accordingly
var city = ''
var country = ''
var API =  ''

class App extends React.Component{

  constructor(){
    super()
    this.state={
      submit:false,
      city:'',
      country:''
    }
    this.submit = this.submit.bind(this)
  }

  submit(event){
    //city and country are taken from the users input
    city = document.getElementById("city").value
    country = document.getElementById("country").value
    //the api call is edited accordingly
    API = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8f06d0138689f3dbd2ea6ca85044f5e7`
    //I'll update state with certain properties that I am expecting from the api
    this.setState({
      submit:true,
      city:city,
      country:country,
      temp:'0',
      pressure:'0',
      humidity:'0',
      temp_min:'0',
      temp_max:'0'
    })

    event.preventDefault()
    console.log(API)
    fetch(API)
      .then(response => response.json())
      .then(data =>{
        //after converting the api response to json data, i can now use it to update state
        this.setState({
          temp:Math.floor(data.main.temp-273.15),
          pressure:data.main.pressure,
          humidity:data.main.humidity,
          temp_min:Math.floor(data.main.temp_min-273.15),
          temp_max:Math.floor(data.main.temp_max-273.15)
        })
      })
      //if the promise is rejected, I will display an error message with the details of what went wrong
      .catch(error=>console.error(error))
  }



  render(){
    return (
      <div className="app">
        <Weather
        submit={this.submit}
        />
        <Result
        data={this.state}
        submit={this.state.submit}
        />
      </div>
    )
  }
}

export default App;
