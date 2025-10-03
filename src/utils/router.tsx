import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import NewGame from "../pages/newGame.tsx";
import GamePage from "../pages/gamePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/newgame',
        element: <NewGame/>,

    },
    {
        path: '/game',
        element: <GamePage/>
    }
])

export default router