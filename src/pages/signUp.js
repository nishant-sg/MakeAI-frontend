import './signUp.css';
import react from 'react';
import Intro from '../components/intro/intro';
import Card from '../components/card/card';

function SignUp() {
    return (
        <div className="signup--main">
            <div className="signup--box">

            <h1>signUp.js</h1>
            <div className="line"/>    
            <form>
                <h3>UserName</h3>
                <input type="text" className="signup--input"></input>

                <h3>Email</h3>
                <input type="text" className="signup--input"></input>

                <h3>Password</h3>
                <input type="text" className="signup--input"></input>

                <h3>Confirm Password</h3>
                <input type="text" className="signup--input"></input>
                <br/>
                <input type="submit" className="signup--submit"/>
            </form>
            <div className="line"/>
            <div className="signup--socials">
                <h1>G</h1>
                <h1>Git</h1>
            </div>
            </div>

        </div>
    );
}

export default SignUp;