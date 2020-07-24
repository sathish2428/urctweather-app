import React, { Fragment } from "react";

export const Form = (props) => {
        return(
            <Fragment>
                <form onSubmit={props.getWeather}>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="country" placeholder="Country"/>

                   <button>Get Weather</button>
                </form>
            </Fragment>
        );
}