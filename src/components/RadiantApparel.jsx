import * as React from 'react';
import '../App.css'



const RadiantApparel = () => {
    return (
        <div className='section' id='RadiantApparel'>
            <div className='section-content lobster'>
                <h1 className='glow'>Radiant Apparel</h1>
            </div>
            <div className='section-content'>
                <h2 className='section-text'>E-commerce Site</h2>
            </div>
            <div className='section-content'>
                <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/MQ6kE3qRK5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen"></iframe>
            </div>
            <div className='section-description'>
                <div className='features'>
                    <a className='features' href='https://github.com/HJohnRoss/Radiant-Apparel'>Github</a>
                </div>
                <h1 className='features'>Features</h1>
                <div className='section-content list-div'>
                    <ul className='section-list '>
                        <li>Fully integrated Stripe API</li>
                        <li>Admin allowing site manager to add and remove items from the site and stripe account simultaneously</li>
                        <li>Login and Registration for Users that allows them to have a Wishlist</li>
                        <li>Password Hashing using B-crypt</li>
                        <li>Validations for Login and Registration</li>
                        <li>Store's categories that can be altered in admin</li>
                        <li>Search feature in store</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RadiantApparel