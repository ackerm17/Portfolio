import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [isZoomedMail, setIsZoomedMail] = React.useState(false);
    const [isZoomed, setIsZoomed] = React.useState(false);

    const handleTextAreaClick = () => {
        setIsZoomed(true);
    };
    
    const handleMailTextAreaClick = () => {
        setIsZoomedMail(true);
    };


    const [state, handleSubmit] = useForm("xpzekqqq");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='section' id='Contact'>
            <div className='section-content lobster'>
                <h1 className='glow'>Contact Me</h1>
            </div>
            <div className='section-content'>
                <label htmlFor="email" className='section-text'>
                    Your Email Address
                </label>
            </div>
            <div className='section-content'>
                <input
                    className={isZoomedMail ? 'zoom' : ''}
                    onClick={handleMailTextAreaClick}
                    id="email"
                    type="email" 
                    name="email"
                    />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />
            </div>
            <div className='section-content'>
                <h2 className='section-text'>Your message</h2>
            </div>
            <div className='section-content'>
                <textarea
                    className={isZoomed ? 'zoom' : ''}
                    onClick={handleTextAreaClick}
                    id="message"
                    name="message"
                    />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    />
            </div>
            <div className='section-content'>
                <button className='submit' type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </div>
        </form>
    );
    }
    function Contact() {
    return (
        <ContactForm />
    );
}
export default Contact;