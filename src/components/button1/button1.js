import react from 'react';
import './button1.css';
function Button1(props) {
    return (
        <button className="button1--main">
            <p>{props.title}</p>
        </button>
    );
}

export default Button1;