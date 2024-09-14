import React, {useContext, useState} from "react";
import Counter from "../components/Counter";
import TextInput from "../components/TextInput";
import { ContextMain } from "../context/ContextMain";




function Prvni() {
    const [hodnotaInputu, setHodnotaInputu] = useState(""); 
   //const [nazev, updateNazev] = useContext(ContextMain) ;

    const handleValueChange = (value) => {
           //this.setState({ textValue: value });
        console.log('VALUE ', value);
        //updateNazev(value);
        setHodnotaInputu(value);
    };

    return (
        <div>
            <h1>Hello World x!</h1>

            <TextInput labelName="Popisek" onValueChange={handleValueChange}></TextInput>
            <br></br>
            <Counter />
            <div>Hodnota z textboxu {hodnotaInputu}</div>
        </div>
    );
}

export default Prvni;
