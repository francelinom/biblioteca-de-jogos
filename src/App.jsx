import Games from "./components/Games.jsx";
import NewGameForm from "./components/NewGameForm.jsx";
import useGameCollections from "./hooks/useGameCollections.js";

export default function App() {

    const { games, addGame, removeGame } = useGameCollections();

    return (
        <div id="app">
            <h1>Biblioteca de Jogos</h1>

            <NewGameForm addGame={addGame} />

            <div className="games">
                {games.length > 0 ? games.map((game) => (
                    <Games
                        key={game.id}
                        title={game.title}
                        cover={game.cover}
                        onRemove={() => removeGame(game.id)}
                    />
                )) : <h2>Nenhum jogo cadastrado, por favor cadastre seus jogos!</h2>}
            </div>
        </div>
    );
}
