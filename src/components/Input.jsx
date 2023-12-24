const Input = ({label, type, name, value, placeholder, className, onChange}) => {
    return (
        <div className="mb-3">
            <label><b>{label}</b></label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
            />
        </div>
    )
};

export default Input;