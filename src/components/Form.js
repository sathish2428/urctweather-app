import React from "react";

export const Form = (props) => {
        return(
                <form onSubmit={props.getWeather}>
                    <div class="form__group field">
                    <input type="input" class="form__field" placeholder="City" name="city" id='city' required autocomplete="off"/>
                    <label for="city" class="form__label">City</label>
                    </div>

                    <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Country" name="country" id='country' required autocomplete="off"/>
                    <label for="country" class="form__label">Country</label>
                    </div>
                   <button id="btn-hide">
                    <div type="submit" class="hexagon-wrapper">
                        <div class="hexagon">
                            <i class="fa fa-sun-o"></i>
                        </div>
                    </div> 
                   </button>

                   {/* <button>Get Weather</button> */}
                </form>
        );
}