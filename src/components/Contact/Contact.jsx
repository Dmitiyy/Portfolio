import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Bg from '../../assets/images/contact_bg.jpg';
import './contact.sass';
import './contact-media.sass';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mess, setMess] = useState('');

    function handlePost  (event) {
        event.preventDefault();
        if (name.length === 0 || email.length === 0 || mess.length === 0) {
            alert('Enter the inputs')
        } else {
            emailjs.sendForm('service_d7wr75o', 'template_yo8QW3pV', event.target, 'user_FdSSkP6FkMjpjLsajouWD')
                .then((result) => {
                    alert(result.text);
                }).catch((error) => {
                    alert(error.text);
                });
        }
    }

    return (
        <div className="contact">
            <h2 className="contact_title">Contacts</h2>
            <div className="contact_container" style={{"backgroundImage": `url(${Bg})`}}>
                <div className="contact_container-inner">
                    <form className="contact_form" onSubmit={(e) => handlePost(e)}>
                        <input name="name" type="text" onChange={(e) => setName(e.target.value)} className="contact_input" placeholder="Name"/>
                        <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} className="contact_input" placeholder="Email"/>
                        <textarea name="mess" onChange={(e) => setMess(e.target.value)} className="contact_mess" placeholder="Message"></textarea>
                        <button className="contact_btn" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;