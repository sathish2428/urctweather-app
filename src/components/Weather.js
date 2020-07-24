import React,{Fragment} from "react";

export const Weather = (props) => {
    return(
        <Fragment>
            {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p> }
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Description:  {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </Fragment>
    );
}