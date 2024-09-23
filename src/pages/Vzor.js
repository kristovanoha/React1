import React from "react"; 
import './../styles/globalSas.scss';

function Vzor( {nazev = "defaultní název"}) {
  return (
    <>
      <div className="ruda">vzor {nazev}</div>



    </>
  );
}


export default Vzor;