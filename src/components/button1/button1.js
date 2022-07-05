import react from 'react';
import './button1.css';
import {Link} from 'react-router-dom';
function Button1(props) {
    return (
        <Link to={props.to}>
        <button className="button1--main">
            <p>{props.title}</p>
        </button>
        </Link>);
}

export default Button1;