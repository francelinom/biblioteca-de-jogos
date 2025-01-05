import {useState} from "react";
import Games from "./components/Games.jsx";
import NewGameForm from "./components/NewGameForm.jsx";

export default function App() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("obc-game-lib");
        if (!storedGames) return [];
        return JSON.parse(storedGames);
    });

    const addGame = ({title, cover}) => {
        const id = Math.floor(Math.random() * 1000000);
        const game = {id, title, cover};
        setGames(state => {
            const newState = [...state, game];
            localStorage.setItem("obc-game-lib", JSON.stringify(newState))
            return newState;
        });
    }

    const removeGame = (id) => {
        setGames(state => {
            const newState = state.filter(game => game.id !== id)
            localStorage.setItem("obc-game-lib", JSON.stringify(newState))
            return newState;
        });
    }

    return (
        <div id="app">
            <h1>Biblioteca de Jogos</h1>

            <NewGameForm addGame={addGame} />

            <div className="games">
                {games.map((game) => (
                    <Games
                        key={game.id}
                        title={game.title}
                        cover={game.cover}
                        onRemove={() => removeGame(game.id)}
                    />
                ))}
            </div>
        </div>
    );
}
