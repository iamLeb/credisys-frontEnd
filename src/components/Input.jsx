import {useState} from "react";

const Input = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = e => {
        setFocused(true);
    }
    return (
        <div className="mb-3 col-md-12">
            <label><b>{label}</b></label>
            <input
                {...inputProps}
                onChange={onChange}
                className="form-control rounded-0"
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "email" && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
};

export default Input;