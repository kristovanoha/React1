import React, {useContext, useState} from "react";
import Counter from "../components/Counter";
import TextInput from "../components/TextInput";
import { ContextMain } from "../context/ContextMain";




function Prvni() {
    const { nazev, updateNazev } = useContext(ContextMain);
    // const [hodnotaInputu, setHodnotaInputu] = useState(""); 
   //const [nazev, updateNazev] = useContext(ContextMain) ;

    const handleValueChange = (value) => {
        console.log('VALUE ', value);
       updateNazev(value); // Aktualizujeme hodnotu `nazev` v kontextu
    };

    return (
        <div>
            <h1>Hello World x!</h1>

            <TextInput labelName="Popisek" value={nazev} onValueChange={handleValueChange}></TextInput>
            <br></br>
            <Counter />
            <div>Hodnota z textboxu {nazev}</div>
        </div>
    );
}

export default Prvni;
