import React, {useCallback, useContext, useState} from "react";
import Counter from "../components/Counter";
import TextInput from "../components/TextInput";
import { ContextMain } from "../context/ContextMain";
import Timer from "../components/Timer";



function Prvni() {
    const { nazev, updateNazev } = useContext(ContextMain);
    // const [hodnotaInputu, setHodnotaInputu] = useState(""); 
   //const [nazev, updateNazev] = useContext(ContextMain) ;

    const handleValueChange = useCallback((value) => {
        console.log('VALUE ', value);
       updateNazev(value); // Aktualizujeme hodnotu `nazev` v kontextu
    },[updateNazev]);

    return (
        <div>
            <h1>Hello World x!</h1>

            <TextInput labelName="Popisek" value={nazev} onValueChange={handleValueChange}></TextInput>
            <br></br>
            <Counter />
            <div>Hodnota z textboxu {nazev}</div>
            <Timer/>
        </div>
    );
}

export default Prvni;
