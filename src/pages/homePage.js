import './homePage.css';
import react from 'react';
import Navbar from '../components/navbar/navbar';
import Snake from '../components/games/snake';
import Intro from '../components/intro/intro';

function HomePage() {
    return (
        <div className="homepage--main">
            <Intro/>
            <h1>homePage.js</h1>
        </div>
    );
}

export default HomePage;