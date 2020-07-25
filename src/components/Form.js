import React from "react";

export const Form = (props) => {
        return(
                <form onSubmit={props.getWeather}>
                    <div className="form__group field">
                    <input type="input" className="form__field" placeholder="City" name="city" id='city' required autoComplete="off"/>
                    <label htmlFor="city" className="form__label">City</label>
                    </div>

                    <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Country" name="country" id='country' required autoComplete="off"/>
                    <label htmlFor="country" className="form__label">Country</label>
                    </div>
                   <button id="btn-hide">
                    <div type="submit" className="hexagon-wrapper">
                        <div className="hexagon">
                            <i className="fa fa-sun-o"></i>
                        </div>
                    </div> 
                   </button>

                   {/* <button>Get Weather</button> */}
                </form>
        );
}