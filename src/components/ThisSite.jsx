import * as React from 'react';
import '../App.css'



const ThisSite = () => {
    return (
        <div className='section' id='ThisSite'>
            <div className='section-content lobster'>
                <h1 className='glow'>This Site</h1>
            </div>
            <div className='section-content'>
                <h2 className='section-text'>Portfolio Website</h2>
            </div>
            <div className='section-description'>
                <a href='https://github.com/ackerm17/Portfolio' className='features'>Github</a>
                <h1 className='features'>Features</h1>
                
                <ul className='section-list'>
                    <li>Embedded youtube videos demonstrating projects</li>
                    <li>Automatic Email system for contacting me</li>
                </ul>
            </div>
        </div>
    )
}

export default ThisSite