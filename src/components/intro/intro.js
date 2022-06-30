import react from  'react';
import './intro.css';
import Model from '../model/model'
import Navbar from '../navbar/navbar';
function Intro(){
    return(
        <div className="intro--main">
            <div className="intro--title">
                <h1>MakeAI</h1>
                <h3>Code.</h3>
                <h3>Create.</h3>
                <h3>Compete.</h3>
            </div>
            <div className="intro--model">
                <Model/>
            </div>
        </div>
    )
}

export default Intro;