import React, { useState } from "react";

const Usestate2 = () => {
  const[isLoading, setIsLoading] = useState(true);

  const loadingHandler = () =>{
    isLoading == true ? setIsLoading(false) : setIsLoading(true)
  }
  return (
    <div style={{textAlign:"center"}}>
      {
        isLoading == true ? "isLoading" : "complete"
      }
      <br />
      <button onClick={() =>{loadingHandler()}}>Stop</button>
    </div>
  );
};

export default Usestate2;
