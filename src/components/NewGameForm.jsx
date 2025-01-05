import {useState} from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput.jsx";

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
            <TextInput value={title} setValue={setTitle} label="Título:"/>
            <TextInput value={cover} setValue={setCover} label="Capa:"/>
            <button type="submit">Adicionar à biblioteca</button>
        </form>
    )
}
