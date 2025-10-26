import { useState } from "react"
import "./contact.scss"
import emailjs from "emailjs-com";
import MessageConf from "./messageConf/MessageConf";

export default function Contact() {

    const [openConf, setOpenConf] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_form', 'template_x7gsbdt', e.target, 'user_R31Rt7RV2zPsAI9sMYWC2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setOpenConf(true);
    };

    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <div className="linksContainer">
                <span><a href="tel: +44 7719 321399">+44 7719 321399</a></span>
                <span><a href="mailto: joshferguso@hotmail.co.uk">joshferguso@hotmail.co.uk</a></span>
                <span><a href="https://www.linkedin.com/in/josh-ferguson-955532222/" target="_blank" rel="noreferrer">LinkedIn</a></span>
                <span><a href="https://github.com/josh-ferguson" target="_blank" rel="noreferrer">GitHub</a></span>
            </div>
            {openConf && <MessageConf closeConf={setOpenConf}/>}
            <div className="formContainer">
                <form onSubmit={sendEmail}>
                    <input type="text" id="name" placeholder="Name" name="name" required/>
                    <input type="email" id="email" placeholder="Email" name="email" required/>
                    <input type="text" id="subject" placeholder="Subject" name="subject" required/>
                    <textarea id="message" rows="8" placeholder="Message..." name="message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
