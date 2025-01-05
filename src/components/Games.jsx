import PropTypes from "prop-types";

Games.prototype = {
    title: PropTypes.string,
    cover: PropTypes.string,
    onRemove: PropTypes.func
}

export default function Games({title, cover, onRemove}) {
    return (
        <div>
            <img src={cover} alt={title}/>
            <div>
                <h2>{title}</h2>
                <button onClick={onRemove}>Remover</button>
            </div>
        </div>
    )
}
