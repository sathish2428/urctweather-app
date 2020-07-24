import React, {Fragment} from "react";
import {Titles} from "./components/Titles";
import {Form} from "./components/Form";
import {Weather} from "./components/Weather";


const API_KEY = "ecf4d3268a678c474152f3fb2ef5f933";

export class App extends React.Component{
  
  state = {
    temperature : undefined,
    city : undefined,
    country: undefined,
    humidity : undefined,
    description: undefined,
    error : undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    if(city ){
    const API_CALL =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const response = await API_CALL.json();
    
    console.log(response)
    if(response.cod === "404"){
      this.setState({
        temperature : undefined,
        city :undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : "City You Entered Is Not Found"
      })
    }else{
    this.setState({
      temperature : response.main.temp,
      city : response.name,
      country : response.sys.country,
      humidity : response.main.humidity,
      description : response.weather[0].description,
      error : ""
    })
  }
  }else{
    this.setState({
      temperature : undefined,
      city :undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      error : "Please enter Values in the input Box"
    })
  }
}
  render(){
    return (
    <Fragment>
      <Titles/>
      <Form getWeather={this.getWeather}/>
      <Weather 
      temperature={this.state.temperature} 
      city={this.state.city} 
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      />
    </Fragment>
    );
  }
}
