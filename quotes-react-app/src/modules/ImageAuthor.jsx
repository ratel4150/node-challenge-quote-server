import React from "react";



const ImageAuthor=(props)=>{
    return (
        <div>
            {console.log(props.imageAuthorUrl)}
            
            <img src={props.imageAuthorUrl} alt="napoleon-hill"  />
        </div>
    )

}

export default ImageAuthor