
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('TfCLxGpUgQw6m-85c');

const Application = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
           const serviceId = 'service_xfgq2ya';
           const templateId = 'template_0u482fj';
           const publicKey = 'TfCLxGpUgQw6m-85c';
           const templateParams = {
               name,
               email,
               message
           };

           emailjs.send(serviceId, templateId, templateParams, publicKey)
               .then(response => console.log(response))
               .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <> 
        <div style={{display:"grid"}}> 
        <input type="text" placeholder="Your Name" value={name} style={{height:"40px"}} onChange={e => setName(e.target.value)} />
        <br></br>
        <input type="email" placeholder="Your email address" value={email} style={{height:"40px"}} onChange={e => setEmail(e.target.value)} />
        <br></br>
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <br></br>
        <button onClick={submit} style={{height:"40px"}}>Send Message</button>
        {emailSent?<span className={emailSent ? 'visible' : null} style={{color:"black"}}>Thank you for your message, we will be in touch in no time!</span>:<></>}
        </div>
        </>
    );
};

export default Application