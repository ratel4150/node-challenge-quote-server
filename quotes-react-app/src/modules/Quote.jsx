import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Quote=(props)=>{
    return (
        <div>
           
        <h2><FontAwesomeIcon icon={faQuoteLeft} size="3x" color="white" />   {props.quote}</h2>
        </div>
    )

}

export default Quote