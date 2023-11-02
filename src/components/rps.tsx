import question from '../images/question mark.png';
import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png';
import { useState } from 'react';

const RockPaperScissors = () => {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("???");
    const [header, setHeader] = useState("Choose one");
    const [computerImg, setComputerImg] = useState(question);

    function play(choice: string) {
        if(playerChoice !== "") {
            return;
        }

        let computer: string = computerPlay();
        
        if(choice === "rock") {
            if(computer === "rock") {
                setHeader("Draw");
            }
            else if(computer === "paper") {
                setHeader("You lose");
            }
            else { //scissors
                setHeader("You win")
            }
        }
        else if(choice === "paper") {
            if(computer === "rock") {
                setHeader("You win");
            }
            else if(computer === "paper") {
                setHeader("Draw");
            }
            else { //scissors
                setHeader("You lose")
            }
        }
        else { //scissors
            if(computer === "rock") {
                setHeader("You lose");
            }
            else if(computer === "paper") {
                setHeader("You win");
            }
            else { //scissors
                setHeader("Draw")
            }
        }

        setPlayerChoice(choice);
        setComputerChoice(computer);
    }

    function computerPlay(): string {
        let randomNumber = Math.floor((Math.random() * 3) + 1);

        switch(randomNumber) {
            case 1:
                setComputerImg(rock);
                return "rock";
            case 2:
                setComputerImg(paper);
                return "paper";
            case 3:
                setComputerImg(scissors);
                return "scissors";
        }

        return "";
    }

    function playAgain() {
        setPlayerChoice("");
        setComputerChoice("???");
        setHeader("Choose one");
        setComputerImg(question);
    }

    return (
        <div className="grid grid-cols-3 justify-center items-center h-max gap-x-2 gap-y-px bg-zinc-700">
            <p className='flex justify-center col-span-3 text-2xl dark:text-white'>{header}</p>

            <div className="flex flex-col justify-center items-center col-start-2 mb-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg mt-2" src={computerImg} alt="?" width={100} height={100}/>
                <div className="p-5">
                    <h5 className=" text-2xl font-bold text-gray-900 dark:text-white">{computerChoice}</h5>
                </div>
            </div>

            <div onClick={() => play("rock")} className={"flex flex-col items-center col-start-1 ml-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 " + ((playerChoice === "rock") ? "dark:bg-gray-700" : "dark:bg-gray-800")}>
                <img className="rounded-t-lg mt-2" src={rock} alt="Rock" width={100} height={100}/>
                <div className="p-5">
                    <h5 className=" text-2xl font-bold text-gray-900 dark:text-white">Rock</h5>
                </div>
            </div>
            <div onClick={() => play("paper")} className={"flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 " + ((playerChoice === "paper") ? "dark:bg-gray-700" : "dark:bg-gray-800")}>
                <img className="rounded-t-lg mt-2" src={paper} alt="Paper" width={100} height={100}/>
                <div className="p-5">
                    <h5 className=" text-2xl font-bold text-gray-900 dark:text-white">Paper</h5>
                </div>
            </div>
            <div onClick={() => play("scissors")} className={"flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 " + ((playerChoice === "scissors") ? "dark:bg-gray-700" : "dark:bg-gray-800")}>
                <img className="rounded-t-lg mt-2" src={scissors} alt="Scissors" width={100} height={100}/>
                <div className="p-5">
                    <h5 className=" text-2xl font-bold text-gray-900 dark:text-white">Scissors</h5>
                </div>
            </div>

            <button onClick={playAgain} className="col-start-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Play again
            </button>
        </div>
    );
}

export default RockPaperScissors;