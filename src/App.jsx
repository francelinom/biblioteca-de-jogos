import {useState} from "react";
import Games from "./components/Games.jsx";

export default function App() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("obc-game-lib");
        if (!storedGames) return [];
        return JSON.parse(storedGames);
    });
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");

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

    function handleFormSubmit(event) {
        event.preventDefault();
        addGame({title, games});
        setTitle("");
        setCover("");
    }

    return (
        <div id="app">
            <h1>Biblioteca de Jogos</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cover">Capa:</label>
                    <input
                        type="text"
                        name="cover"
                        id="cover"
                        value={cover}
                        onChange={(event) => setCover(event.target.value)}
                    />
                </div>
                <button type="submit">Adicionar à biblioteca</button>
            </form>
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
