import React, {useState} from "react";

const Input = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = e => {
        setFocused(true);
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>
            </div>
            <div className="mt-2">
                <input
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() => inputProps.name === "email" && setFocused(true)}
                    focused={focused.toString()}
                    className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
};

export default Input;