import Display from "../components/display.tsx";
import CustomButton from "../components/customButton.tsx";
import {useState} from "react";
import {numberGenerator} from "../utils/lib.ts";

const GamePage = () => {

    const [number, setNumber] = useState(numberGenerator);
    const [i, setI] = useState(0)

    const playerList = localStorage.getItem('players') as string;
    const parsedList = JSON.parse(playerList)

    const roll = () => {
        setNumber(numberGenerator)
        if (i < parsedList.length - 1) {
            console.log(parsedList[i])
            setI(prevState => prevState + 1)
        } else {
            setI(0)
        }
    }

    return (
        <>

            <Display>
                <h1 className={'text-4xl font-semibold'}>{parsedList[i]}</h1>
                <h2 className={'text-4xl font-semibold'}>{number}</h2>
                <CustomButton onClick={roll}>NEXT PLAYER</CustomButton>
                <CustomButton variant={"danger"}>QUIT</CustomButton>
            </Display>
        </>
    )
}
export default GamePage
