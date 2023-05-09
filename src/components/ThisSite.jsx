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
                <div className='features'>
                    <a href='https://github.com/ackerm17/Portfolio' className='features'>Github</a>
                </div>
                <h1 className='features'>Features</h1>
                <div className='section-content list-div'>
                    <ul className='section-list'>
                        <li>Embedded youtube videos demonstrating projects</li>
                        <li>Automatic Email system for contacting me</li>
                        <li>Responsive CSS so mobile, tablet, and desktop users can use the site with ease</li>
                    </ul>
                </div>
                <h1 className='features'>Technologies</h1>
                <div className='section-content list-div'>
                    <ul className='section-list'>
                        <li>Vite/React</li>
                        <li>Material UI</li>
                        <li>FormSpree</li>
                        <li>HTML, CSS, Javascript</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ThisSite