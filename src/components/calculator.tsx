import { Button } from "@material-tailwind/react"
import { stat } from "fs";
import { useEffect, useState } from "react";

const Calculator = () => {
    const [values, setValues] = useState(["0"]);
    const [operators, setOperators] = useState([""]);
    const [isResult, setIsResult] = useState(true);

    function addSymbol(symbol: string) {
        switch(symbol) {
            case "0": 
            case "1": 
            case "2": 
            case "3": 
            case "4": 
            case "5": 
            case "6": 
            case "7": 
            case "8": 
            case "9":
                addDigit(symbol);
                break;
            case "+":
            case "-":
            case "x":
            case "/":
                if(operators[0] === "") {
                    setOperators([symbol]);
                } 
                else {
                    setOperators(oldOperators => [...oldOperators, symbol]);
                }
                setValues(oldvalues => [...oldvalues, " "])
                setIsResult(false);
                break;
            case ".":
                if(values[values.length - 1].includes(".")) {
                    break;
                }

                if(values[values.length - 1] === " ") {
                    setValues([...values.slice(0, values.length - 1), "0."])
                }
                else {
                    setValues([...values.slice(0, values.length - 1), values[values.length - 1] + symbol])
                }
                break;
            case "=":
                //se tiene que usar variables temporales ya que el useState opera de manera asyncrona
                let tempValues = values;
                let tempOperators = operators;
                for(let i = 0; i < tempOperators.length; i++) {
                    if(tempOperators[i] === "x" || tempOperators[i] === "/") {
                        const result = operate(parseFloat(tempValues[i]), tempOperators[i], parseFloat(tempValues[i+1]))
                        tempValues.splice(i, 2, result);
                        tempOperators.splice(i, 1);
                    }
                }

                let leftValue = tempValues[0];
                for(let i = 1; i < values.length; i++) {
                    leftValue = operate(parseFloat(leftValue), tempOperators[i-1], parseFloat(tempValues[i]))
                }
                setValues([leftValue]);
                setOperators([""]);
                setIsResult(true);
                break;
        }
    }

    function addDigit(digit: string) {
        if(isResult) {
            setValues([digit]);
            setIsResult(false);
        }
        else if(values[values.length - 1] === "0" || values[values.length - 1] === " ") {
            setValues([...values.slice(0, values.length - 1), digit])
        }
        else {
            setValues([...values.slice(0, values.length - 1), values[values.length - 1] + digit])
        }
    }

    function operate(leftValue: number, operate: string, rightValue: number) {
        switch (operate) {
            case "+": {
                return (leftValue + rightValue).toString();
            }
            case "-": {
                return (leftValue - rightValue).toString();
            }
            case "x": {
                return (leftValue * rightValue).toString();
            }
            case "/": {
                return (leftValue / rightValue).toString();
            }
            default: {
                return "";
            }
        }
    }

    function clean() {
        setValues(["0"]);
        setOperators([""]);
    }

    return (
        <div className="grid grid-cols-4 justify-center items-center h-96 gap-x-2 gap-y-px bg-zinc-700">
            <p className="col-span-4 text-2xl text-gray-900 dark:text-white border-2 border-white justify-self-end w-1/4 text-right mr-16">
                {values.map((value, index) => {
                        let expressionPart;

                        if(operators[index]) {
                            //expressionPart = " " + operators[index] + " " + value;
                            expressionPart = value + " " + operators[index] + " ";
                        }
                        else {
                            expressionPart = value
                        }

                        return expressionPart;
                })}
            </p>

            <Button onClick={clean} className="border-2 border-white py-1 w-4/5 justify-self-center">C</Button>
            <Button className="border-2 border-white py-1 w-4/5 justify-self-center">()</Button>
            <Button className="border-2 border-white py-1 w-4/5 justify-self-center">%</Button>
            <Button onClick={() => addSymbol("/")} className="border-2 border-white py-1 w-4/5 justify-self-center">/</Button>

            <Button onClick={() => addSymbol("7")} className="border-2 border-white py-1 w-4/5 justify-self-center">7</Button>
            <Button onClick={() => addSymbol("8")} className="border-2 border-white py-1 w-4/5 justify-self-center">8</Button>
            <Button onClick={() => addSymbol("9")} className="border-2 border-white py-1 w-4/5 justify-self-center">9</Button>
            <Button onClick={() => addSymbol("x")} className="border-2 border-white py-1 w-4/5 justify-self-center">x</Button>

            <Button onClick={() => addSymbol("4")} className="border-2 border-white py-1 w-4/5 justify-self-center">4</Button>
            <Button onClick={() => addSymbol("5")} className="border-2 border-white py-1 w-4/5 justify-self-center">5</Button>
            <Button onClick={() => addSymbol("6")} className="border-2 border-white py-1 w-4/5 justify-self-center">6</Button>
            <Button onClick={() => addSymbol("-")} className="border-2 border-white py-1 w-4/5 justify-self-center">-</Button>

            <Button onClick={() => addSymbol("1")} className="border-2 border-white py-1 w-4/5 justify-self-center">1</Button>
            <Button onClick={() => addSymbol("2")} className="border-2 border-white py-1 w-4/5 justify-self-center">2</Button>
            <Button onClick={() => addSymbol("3")} className="border-2 border-white py-1 w-4/5 justify-self-center">3</Button>
            <Button onClick={() => addSymbol("+")} className="border-2 border-white py-1 w-4/5 justify-self-center">+</Button>

            <Button onClick={() => addSymbol("0")} className="col-span-2 border-2 border-white py-1 w-4/5 justify-self-center">0</Button>
            <Button onClick={() => addSymbol(".")} className="border-2 border-white py-1 w-4/5 justify-self-center">.</Button>
            <Button onClick={() => addSymbol("=")} className="border-2 border-white py-1 w-4/5 justify-self-center">=</Button>
        </div>
    );
  };
  
  export default Calculator;