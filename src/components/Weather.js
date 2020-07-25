import React,{Fragment} from "react";

export const Weather = (props) => {
    return(
        <Fragment>
            <div className="weather__info">
                {props.city && props.country && <p className="weather__key">Location: 
                    <span className="weather__value"> {props.city}, {props.country}</span>
                </p>}
                {props.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {props.temperature}</span>
                </p> }
                {props.humidity && <p className="weather__key">Humidity: 
                    <span className="weather__value"> {props.humidity}</span>
                </p>}
                {props.description && <p className="weather__key">Description:  
                    <span className="weather__value"> {props.description}</span>
                </p>}
                {props.error && (
                    <div class="row">
                    <div class="col-xs-12 ml-2">
                        <div class="new-message-box">
                            <div class="new-message-box-danger">
                                <div class="info-tab tip-icon-danger" title="error"><i></i></div>
                                <div class="tip-box-danger"> 
                                    <p>{props.error} 
                                    {/* <a class="btn btn-sm" href="555"> intente nuevamente</a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>)
               
                
                }
            </div>
        </Fragment>
    );
}