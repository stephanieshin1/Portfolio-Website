import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AppHeader.scss'

function AppHeader({ selected }) {
    return (
        <div className="app-header">
            <h1><Link to="/home">STEPHANIE SHIN</Link></h1>
            <div className="gap" />
            <div className="app-nav">
                <Link to="/home" className={`${selected === 'home' ? 'selected' : ''}`}>HOME</Link>
                <Link to="/projects" className={`${selected === 'projects' ? 'selected' : ''}`}>PROJECTS</Link>
                <a href="https://www.linkedin.com/in/shinstephanie/" target="_blank" rel="noreferrer" className="out-link">
                    LINKEDIN
                    <img src={require("../images/away_arrow.png")} alt="arrow" />
                </a>
                <a href="https://github.com/stephanieshin1" target="_blank" rel="noreferrer" className="out-link">
                    GITHUB
                    <img src={require("../images/away_arrow.png")} alt="arrow" />
                </a>
            </div>
        </div>
    )
}

export default AppHeader;