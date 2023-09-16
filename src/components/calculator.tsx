import { Button } from "@material-tailwind/react"
import { useState } from "react";

const Calculator = () => {
    const [values, setValues] = useState(["0"]);
    const [operators, setOperators] = useState([""]);

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
            case "+": {
                if(operators.length === 1) {
                    setOperators(["+"]);
                }else {
                    setOperators(oldOperators => [...oldOperators, "+"]);
                }
                setValues(oldvalues => [...oldvalues, " "])
                break;
            }
            case "-": {
                if(operators.length === 1) {
                    setOperators(["-"]);
                }else {
                    setOperators(oldOperators => [...oldOperators, "-"]);
                }
                setValues(oldvalues => [...oldvalues, " "])
                break;
            }
            case "x": {
                if(operators.length === 1) {
                    setOperators(["x"]);
                }else {
                    setOperators(oldOperators => [...oldOperators, "x"]);
                }
                setValues(oldvalues => [...oldvalues, " "])
                break;
            }
            case "/": {
                if(operators.length === 1) {
                    setOperators(["/"]);
                }else {
                    setOperators(oldOperators => [...oldOperators, "/"]);
                }
                setValues(oldvalues => [...oldvalues, " "])
                break;
            }
            case "=": {
                let leftValue = values["0"];
                for(let i = 1; i < values.length; i++) {
                    leftValue = operate(parseFloat(leftValue), operators[i-1], parseFloat(values[i]))
                }
                setValues([leftValue]);
                setOperators([""]);
                break;
            }
        }
    }

    function addDigit(digit: string) {
        if(values[values.length - 1] === "0" || values[values.length - 1] === " ") {
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

            <Button className="border-2 border-white py-1 w-4/5 justify-self-center" onClick={clean}>C</Button>
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
            <Button className="border-2 border-white py-1 w-4/5 justify-self-center">.</Button>
            <Button onClick={() => addSymbol("=")} className="border-2 border-white py-1 w-4/5 justify-self-center">=</Button>
        </div>
    );
  };
  
  export default Calculator;