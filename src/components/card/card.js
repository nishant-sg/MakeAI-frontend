import react from 'react';
import './card.css';
function Card(props) {
    return (
        <div className="card--main">
            <p>{props.title}</p>
        </div>
    );
}

export default Card;