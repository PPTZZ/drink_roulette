import Display from "./components/display.tsx";
import './index.css'
import CustomButton from "./components/customButton.tsx";
import {useNavigate} from "react-router";


function App() {

    const navigate = useNavigate();
    // Checking to see if there are existing players
    const checkPlayers = localStorage.getItem("players");

    return (
        <>
            <Display>
                <h1 className={'text-4xl font-semibold'}>WELCOME</h1>
                <h2 className={'text-2xl font-semibold'}>TO YOUR DRINKING CHALLENGE</h2>
                <div className={'flex flex-col gap-6 items-center'}>
                    {/*{checkPlayers && <CustomButton>Continue</CustomButton>}*/}
                    <CustomButton onClick={() => navigate('/newgame')}>New Game</CustomButton>
                </div>
            </Display>
        </>
    )
}

export default App
