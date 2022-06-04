import './navbar.css';
import react from 'react';
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
            <div className='nav'>
                <div className='nav-logo'><h1>navbar</h1></div>
                <div className='nav-buttons'>
                    <div className='dark-Mode-button'>dark mode</div>
                    <div className='inactive-button' onClick={() => { deactivateAllButtons(); setButton1(true) }}><div className={button1 ? 'bg-button-active' : 'bg-button-inactive'} /></div>
                    <div className='inactive-button' onClick={() => { deactivateAllButtons(); setButton2(true) }}><div className={button2 ? 'bg-button-active' : 'bg-button-inactive'} /></div>
                    <div className='inactive-button' onClick={() => { deactivateAllButtons(); setButton3(true) }}><div className={button3 ? 'bg-button-active' : 'bg-button-inactive'} /></div>
                    <div className='inactive-button' onClick={() => { deactivateAllButtons(); setButton4(true) }}><div className={button4 ? 'bg-button-active' : 'bg-button-inactive'} /></div>

                </div>
            </div>

        </>
    );
}

export default Navbar;