import React,{useEffect,useState} from "react";
import ContainerQuoteAuthor from "./ContainerQuoteAuthor";
import Quote from "./Quote";


const ContainerQuotes=()=>{
   const [quotes, setQuotes] = useState(null);
   const randomNumber=Math.floor(Math.random() * 10);
    useEffect(() => {
        fetch(
          "https://long-polar-plot.glitch.me/quotes/"+randomNumber
        )
          .then((res) => res.json())
          .then((data) => {
            setQuotes(data)
           
          });
      }, []);
      
if (quotes) {
    return (
        <div className="containerQuotes">
              {console.log(quotes.url)}
              <Quote quote={quotes.quote}/>
              <ContainerQuoteAuthor author={quotes.author} imageAuthorUrl={quotes.url}/>
              
            
           

        </div>
    )
    
}else {
    return null
}

    

}

export default ContainerQuotes