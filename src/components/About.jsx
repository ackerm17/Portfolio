import * as React from 'react';
import '../App.css'

const About = () => {
    return (
        <div className='section' id='About'>
            <div className='section-content lobster'>
                <h1 className='glow'>About Me</h1>
            </div>
            <div className='section-content'>
                <div className='Aboutme'>
                    <div className='Profile'></div>
                    <div className='Spacer'></div>
                    <div className='Aboutme-description'>
                        <h1 className='features'>Hi I'm Ben!</h1>
                        <div className='section-content'>
                            <a className='links' href='https://github.com/ackerm17'>Github</a>
                            <a className='links' href='https://www.linkedin.com/in/benjamin-ackerman-776241253/'>LinkedIn</a>
                        </div>
                        <div className='section-content'>
                            <p className='section-list'>
                                To keep it short I'm a Full Stack Developer familiar with:
                            </p>
                        </div>
                        <div className='section-content about-list-div'>
                            <ul className='section-list'>
                                <li>Languages: Python, Java, Javascript, Html, CSS</li>
                                <li>Frameworks/Libraries: Flask, React, React-Native, Bootstrap, Jinja, Express, Spring, Node.js, jQuery, Three.js</li>
                                <li>Databases: MySQL, MongoDB</li>
                                <li>Additional Skills: Team Management, Project and Budget Analysis, and Forward Thinking.</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About