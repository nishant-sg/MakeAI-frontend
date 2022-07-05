import './signIn.css';
import react from 'react';
import Intro from '../components/intro/intro';
import Card from '../components/card/card';

function SignIn() {
    return (
        <div className="signin--main">
            <div className="signin--box">

            <h1>signIn.js</h1>
            <form>
                <h3>UserName</h3>
                <input type="text" className="signup--input"></input>

                <h3>Confirm Password</h3>
                <input type="text" className="signup--input"></input>
                <br/>
                <input type="submit" className="signup--submit"/>
            </form>
            <br/>
            <div className="signin--socials">
                <h1>G</h1>
                <h1>Git</h1>
            </div>
            </div>

        </div>
    );
}

export default SignIn;