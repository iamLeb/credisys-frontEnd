import React, {useState} from "react";

const Input = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = e => {
        setFocused(true);
    }
    return (
        <div className="form-floating mb-3">
            <input
                {...inputProps}
                onChange={onChange}
                className="form-control"
                id="floatingInput"
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "email" && setFocused(true)}
                focused={focused.toString()}
            />

            <label htmlFor="floatingInput">{label}</label>

            <span>{errorMessage}</span>
        </div>
    )
};

export default Input;