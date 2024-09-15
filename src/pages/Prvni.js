import React, {useCallback, useContext, useState, lazy,Suspense} from "react";
import Counter from "../components/Counter";
import TextInput from "../components/TextInput";
import { ContextMain } from "../context/ContextMain";
import Timer from "../components/Timer";
//import LazyTest from "../components/LazyTest";
import { delay } from "../utils/delay";

const LazyTest = lazy(() => delay(5000).then(() => import("../components/LazyTest")));

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
            <Timer />
            <Suspense fallback={<div>Načítání komponenty...</div>}>
                <LazyTest />
            </Suspense>
        </div>
    );
}

export default Prvni;
