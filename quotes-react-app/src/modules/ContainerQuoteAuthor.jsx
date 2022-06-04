import React from "react";
import NameAuthor from "./NameAuthor";
import ImageAuthor from "./ImageAuthor";

const ContainerQuoteAuthor=(props)=>{

    return(
        <div className="container-author">
            <NameAuthor nameAuthor={props.author}/>
            <ImageAuthor imageAuthorUrl={props.imageAuthorUrl}/>
            

        </div>
    )

}

export default ContainerQuoteAuthor