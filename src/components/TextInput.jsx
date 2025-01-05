import PropTypes from "prop-types";

TextInput.prototype = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    label: PropTypes.string,
}

export default function TextInput({value, setValue, label}) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type={label}
                name={label}
                id={label}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    )
}
