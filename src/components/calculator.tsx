import { Button } from "@material-tailwind/react"
import { useState } from "react";

const Calculator = () => {
    const [expresion, setExpresion] = useState("0");

    function addSymbol(symbol: string) {
        switch(symbol) {
            case "0": {
                addDigit("0");
                break;
            }
            case "1": {
                addDigit("1");
                break;
            }
            case "2": {
                addDigit("2");
                break;
            }
            case "3": {
                addDigit("3");
                break;
            }
            case "4": {
                addDigit("4");
                break;
            }
            case "5": {
                addDigit("5");
                break;
            }
            case "6": {
                addDigit("6");
                break;
            }
            case "7": {
                addDigit("7");
                break;
            }
            case "8": {
                addDigit("8");
                break;
            }
            case "9": {
                addDigit("9");
                break;
            }
        }
    }

    function addDigit(digit: string) {
        if(expresion == "0") {
            setExpresion(digit);
        }
        else {
            setExpresion(expresion + digit);
        }
    }

    function clean() {
        setExpresion("0");
    }

    return (
        <div id="background" className="grid grid-cols-4 justify-center items-center h-96 gap-x-2 gap-y-0 bg-zinc-800">
            <p className="col-span-4 text-2xl text-gray-900 dark:text-white border-2 border-white justify-self-end w-1/4 text-right mr-16 mb-4 mt-2">{expresion}</p>
            <Button className="border-2 border-white" onClick={clean}>C</Button>
            <Button className="border-2 border-white">()</Button>
            <Button className="border-2 border-white">%</Button>
            <Button className="border-2 border-white">/</Button>
            <Button onClick={() => addSymbol("7")} className="border-2 border-white">7</Button>
            <Button onClick={() => addSymbol("8")} className="border-2 border-white">8</Button>
            <Button onClick={() => addSymbol("9")} className="border-2 border-white">9</Button>
            <Button className="border-2 border-white">X</Button>
            <Button onClick={() => addSymbol("4")} className="border-2 border-white">4</Button>
            <Button onClick={() => addSymbol("5")} className="border-2 border-white">5</Button>
            <Button onClick={() => addSymbol("6")} className="border-2 border-white">6</Button>
            <Button className="border-2 border-white">-</Button>
            <Button onClick={() => addSymbol("1")} className="border-2 border-white">1</Button>
            <Button onClick={() => addSymbol("2")} className="border-2 border-white">2</Button>
            <Button onClick={() => addSymbol("3")} className="border-2 border-white">3</Button>
            <Button className="border-2 border-white">+</Button>
            <Button onClick={() => addSymbol("0")} className="col-span-2 border-2 border-white">0</Button>
            <Button className="border-2 border-white">.</Button>
            <Button className="border-2 border-white">=</Button>
        </div>
    );
  };
  
  export default Calculator;