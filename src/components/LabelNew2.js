import React from "react";
import LabelNew from "./LabelNew";


function LabelNew2({hodnota=0, ...props}){

    return (
        <div>         
          <LabelNew {...props} /> hodnota{hodnota}
          

        </div>
      );

}

export default LabelNew2;