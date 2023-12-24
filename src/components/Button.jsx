const Button = ({color, text}) => {
    return (
        <div className="clearfix">
            <button style={{backgroundColor: color}} className={'btn text-white w-100 rounded-0'}>{text}</button>
        </div>
    );
};


export default Button;