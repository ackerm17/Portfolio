import * as React from 'react';
import '../App.css'



const TriviaGame = () => {
    return (
        <div className='section' id='TriviaGame'>
            <div className='section-content lobster'>
                <h1 className='glow'>Trivia Game</h1>
            </div>
            <div className='section-content'>
                <h2 className='section-text'>Game Site</h2>
            </div>
            <div className='section-content'>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/RFvlLDz7P3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
            </div>
            <div className='section-description'>
                <div className='features'>
                    <a className='features' href='https://github.com/ackerm17/first_project'>Github</a>
                </div>
                <h1 className='features'>Features</h1>
                <div className='section-content list-div'>
                    <ul className='section-list'>
                        <li>Customizable API calls so users can customize their trivia game</li>
                        <li>Login and Registration</li>
                        <li>Password hashing via B-crypt</li>
                        <li>Validation using regex and letter count</li>
                    </ul>
                </div>
                <h1 className='features'>Technologies</h1>
                <div className='section-content list-div'>
                    <ul className='section-list'>
                        <li>Python</li>
                        <li>MySQL</li>
                        <li>Flask</li>
                        <li>Open Trivia DB API</li>
                        <li>BootStrap</li>
                        <li>HTML, CSS, JavaScript</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TriviaGame