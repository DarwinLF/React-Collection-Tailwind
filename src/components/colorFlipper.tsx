import { Button } from "@material-tailwind/react"
import { useState } from "react";

const ColorFlipper = () => {
    const [bgColor, setBgColor] = useState("");

    const changeColor = (newColor: string) => {
        setBgColor(newColor);
    }

    return (
        <div id="background" className="flex justify-center items-center h-screen gap-4" style={{backgroundColor: bgColor}}>
            <Button size="sm" variant="outlined" className="rounded-full bg-gray-400" onClick={() => changeColor("white")}>White</Button>
            <Button size="sm" variant="outlined" className="rounded-full bg-gray-400" onClick={() => changeColor("red")}>Red</Button>
            <Button size="sm" variant="outlined" className="rounded-full bg-gray-400" onClick={() => changeColor("blue")}>Blue</Button>
            <Button size="sm" variant="outlined" className="rounded-full bg-gray-400" onClick={() => changeColor("green")}>Green</Button>
        </div>
    );
  };
  
  export default ColorFlipper;