import './homePage.css';
import react from 'react';
import Navbar from '../components/navbar/navbar';
import Snake from '../components/games/snake';
import Intro from '../components/intro/intro';
import Card from '../components/card/card';

function HomePage() {
    return (
        <div className="homepage--main">
            <Intro/>
            <h1>homePage.js</h1>
            <div className="homepage--about">About</div>
            <div className="homepage--tutorial">Tutorial</div>
            <div className="homepage--games">
                Games
                <Card title="Snake"/>
                <Card title="Pong"/>
                <Card title="Apple"/>
                <Card title="Number Recognition"/>
                <Card title="Snake"/>
            </div>
            <div className="homepage--leaderboard">LeaderBoard</div>
        </div>
    );
}

export default HomePage;