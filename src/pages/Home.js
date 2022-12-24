import React from 'react';
import AppHeader from '../common/AppHeader';

function Home() {
    return (
        <div className="home-component">
            <AppHeader selected="home" />
            <div className="home-container">
                <h2>ABOUT ME</h2>
                <ul>
                    <li>LOCATED <p>BAY AREA</p></li>
                    <li>EDUCATION <p>UCLA, COMPUTER SCIENCE B.S. 2022</p></li>
                    <li>CURRENTLY <p>ASSOCIATE SOFTWARE ENGINEER, VEEVA SYSTEMS</p></li>
                    <li>TECHNOLOGIES <p>HTML/CSS/JS, REACT/TYPESCRIPT, PYTHON, GRAPHQL</p></li>
                    <li>INTERESTS <p>ENVIRONMENTAL SCIENCE/CLIMATE CHANGE, MUSIC, READING, COFFEE &amp; MATCHA</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Home;