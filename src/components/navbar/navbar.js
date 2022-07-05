import './navbar.css';
import react from 'react';
import Button1 from '../button1/button1'
import Button2 from '../button2/button2'
import { useState } from 'react';

function Navbar() {
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [button4, setButton4] = useState(false);

    const deactivateAllButtons = () => {
        setButton1(false);
        setButton2(false);
        setButton3(false);
        setButton4(false);
    }

    return (
        <>
            <div className='nav--main'>
                <div className='nav--logo'><h1>navbar</h1></div>
                <div className='nav--buttons'>
                    <Button1 title="Sign Up!" to="/signup"/>
                    <Button1 title="Login" to="/signin"/>
                    
                </div>
            </div>

        </>
    );
}

export default Navbar;