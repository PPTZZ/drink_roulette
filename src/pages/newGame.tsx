import Display from "../components/display.tsx";
import CustomButton from "../components/customButton.tsx";
import type {FormEvent} from "react";
import {useNavigate} from "react-router";

const NewGame = () => {

    const navigate = useNavigate();

    const addPlayer = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const playerName = formData.get("playerName");
        const playerList = localStorage.getItem('players');

        // TO DO:  playerName === 'stefana' || 'stf' || 'stefi ? playerName = 'pizdonia' : playerName

        if (!playerName) {
            alert("Please enter a player name");
            return;
        } else if (!playerList) {
            if (playerName === "stf" || playerName === "stefi" || playerName === 'stefana') {
                localStorage.setItem("players", JSON.stringify(['Pizdonia']));
                alert('Nume incorect defaulting to Pizdonia')
            } else {
                localStorage.setItem('players', JSON.stringify([playerName]));
            }
            return;
        } else if (playerList) {
            const players = JSON.parse(playerList);
            if (playerName === "stf" || playerName === "stefi" || playerName === 'stefana') {
                localStorage.setItem("players", JSON.stringify([...players, 'Pizdonia']));
                alert('Nume incorect defaulting to Pizdonia')
            } else {
                localStorage.setItem('players', JSON.stringify([...players, playerName]));

            }
        }

        (e.target as HTMLFormElement).reset();
    }

    const startGame = () => {
        navigate('/game');
    }

    return (
        <Display>
            <h1 className={'text-2xl font-semibold'}>ADD PLAYERS</h1>
            <form className={'flex flex-col gap-4 items-center'} onSubmit={addPlayer}>
                <input type="text" placeholder={'ENTER PLAYER NAME'} name={'playerName'}/>
                <CustomButton type={'submit'}>ADD PLAYER</CustomButton>
                <CustomButton type={'button'} onClick={startGame}>START GAME</CustomButton>
            </form>
        </Display>
    )
}
export default NewGame
