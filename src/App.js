import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
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
    const API_CALL =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
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
     <div className="container-fluid h-100 bg-autumn">
       <div className="row justify-content-center align-items-center h-100">
        <div className="container mt-5 h-75 ">
          <div className="row h-100 justify-content-center align-content-center bg-overlay">
            <div className="col-md-4 h-100 bg-left align-items-center justify-content-center d-flex">
            <Titles/>
            </div>
            <div className="col-md-8 h-100 bg-right ">
                <Form getWeather={this.getWeather} />
                  <Weather 
                  temperature={this.state.temperature} 
                  city={this.state.city} 
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
            </div>
          </div>
        </div>
       </div>
     </div>


     
          <div className="col-6 h-100 justify-content-center">
             
           
                
             
             
          </div>
          


      {/* <div className="wrapper">
        <div className="main">
          <div className="container h-100 ">
            <div className="row justify-content-center h-100">
              <div className="col-xs-5 hidden-md-down title-container">
               
              </div>
              <div className="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 form-container">
               
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
    );
  }
}

