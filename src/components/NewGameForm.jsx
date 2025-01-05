import {useState} from "react";
import PropTypes from "prop-types";

NewGameForm.prototype = {
    addGame: PropTypes.func,
    games: PropTypes.array
}

export default function NewGameForm({addGame}) {
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        addGame({title, cover});
        setTitle("");
        setCover("");
    }

    return (
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
    )
}
