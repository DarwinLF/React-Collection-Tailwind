import { Button } from "@material-tailwind/react"
import { useState } from "react";

const Calculator = () => {
    const [expressionPart, setExpressionPart] = useState(["0"]);
    const [isResult, setIsResult] = useState(false);
    const [openedParentesis, setOpenedParentesis] = useState(false);

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
                addOperator(symbol);
                setIsResult(false);
                break;
            case ".":
                addPoint();
                break;
            case "()":
                if(openedParentesis) {
                    setExpressionPart([...expressionPart, ")"])
                    setOpenedParentesis(false);
                }
                else {
                    if(expressionPart.length === 1 && expressionPart[0] === "0") {
                        setExpressionPart(["("]);
                    }
                    else {
                        setExpressionPart([...expressionPart, "("]);
                    }
                    setOpenedParentesis(true);
                }
                break;
            case "=":
                setExpressionPart(calculate(expressionPart, 0));
                setIsResult(true);
                break;
        }
    }

    function addDigit(digit: string) {
        const lastPart = expressionPart[expressionPart.length - 1];

        if(isResult || lastPart === "0") {
            setExpressionPart([digit]);
            setIsResult(false);
        }
        else if(lastPart !== "+" && lastPart !== "-" && lastPart !== "x" && lastPart !== "/" && lastPart !== "(") {
            setExpressionPart([...expressionPart.slice(0, expressionPart.length - 1), lastPart + digit]);
        }
        else {
            setExpressionPart([...expressionPart, digit]);
        }
    }

    function addOperator(operator: string) {
        const lastPart = expressionPart[expressionPart.length - 1];

        if(lastPart === "+" || lastPart === "-" || lastPart === "x" || lastPart === "/") {
            return;
        }

        setExpressionPart([...expressionPart, operator]);
        setOpenedParentesis(false);

    }

    function addPoint() {
        const lastPart = expressionPart[expressionPart.length - 1];

        if(lastPart.includes(".")) {
            return;
        }

        const regex = /(\+|-|x|\/)/g;

        if(lastPart.match(regex)){
            setExpressionPart([...expressionPart, "0."]);
        }
        else {
            setExpressionPart([...expressionPart.slice(0, expressionPart.length - 1), lastPart + "."]);
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

    function calculate(tempExpressionPart: string[], i: number) {
        for(let j = i; j < tempExpressionPart.length; j++) {
            if(tempExpressionPart[j].match(/(x|\/)/g)) {
                if(tempExpressionPart[j + 1] === "(") {
                    tempExpressionPart = calculate(tempExpressionPart, j + 1);
                }
                const result = operate(parseFloat(tempExpressionPart[j - 1]), 
                                        tempExpressionPart[j], 
                                        parseFloat(tempExpressionPart[j + 1]));
                tempExpressionPart.splice(j - 1, 3, result);
            }
        }

        if(tempExpressionPart[i] === "(") {
            tempExpressionPart.splice(i, 1);
        }

        while(tempExpressionPart[i] !== ")" && i < tempExpressionPart.length - 1) {
            const result = operate(parseFloat(tempExpressionPart[i]), 
                                    tempExpressionPart[i + 1], 
                                    parseFloat(tempExpressionPart[i + 2]));
            tempExpressionPart.splice(i, 3, result);
            i++;
        }

        if(tempExpressionPart[i] === ")") {
            tempExpressionPart.splice(i, 1);
        }

        return tempExpressionPart;
    }

    function clean() {
        setExpressionPart(["0"]);
        setOpenedParentesis(false);
    }

    return (
        <div className="grid grid-cols-4 justify-center items-center h-96 gap-x-2 gap-y-px bg-zinc-700">
            <p className="col-span-4 text-2xl text-gray-900 dark:text-white border-2 border-white justify-self-end w-1/4 text-right mr-16">
                {expressionPart.map((value) => {
                    return value;
                })}
            </p>

            <Button onClick={clean} className="border-2 border-white py-1 w-4/5 justify-self-center">C</Button>
            <Button onClick={() => addSymbol("()")} className="border-2 border-white py-1 w-4/5 justify-self-center">()</Button>
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