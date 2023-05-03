import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import './styles.css'

const Contact = (props) => {
    const form = useRef()
    const [emailContent, setEmailContent] = useState({
        senderName: "",
        senderEmail: "",
        senderSubject: "",
        senderMessage: "",
    })
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setMessage("")
        setEmailContent({...emailContent, [e.target.name]: e.target.value})
    }

    const handleSendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_72qxcai','template_4pfa7ci',form.current,'8pCzt_Ck1JFlrLO8q')
        .then(result => 
            {
                setMessage("Message sent succesfully, Thank you!")
                setEmailContent({
                    senderName: "",
                    senderEmail: "",
                    senderSubject: "",
                    senderMessage: "",
                })
                setTimeout(() => {
                    props.setMainView("Home")
                }, 1000);
        
        }, error => setMessage(error.text))

        
    }
    return (
        <div className="section contact">
            <h1 className="name">Send me a message</h1>
            <div className="formContainer">
                <form className="formContactMe" onSubmit={handleSendEmail} ref={form}>
                    <p className="introduction">"I'm open to any projects."</p>
                    <label htmlFor="senderName">Your Name: 
                        <input type="text" name="senderName" id="senderName" value={emailContent.senderName} onChange = {handleChange} required/>
                    </label>
                    <label htmlFor="senderEmail">Your Email: 
                        <input type="email" name="senderEmail" id="senderEmail" value={emailContent.senderEmail} onChange = {handleChange} required/>
                    </label>
                    <label htmlFor="senderSubject">Subject: 
                        <input type="text" name="senderSubject" id="senderSubject" value={emailContent.senderSubject} onChange = {handleChange}required/>
                    </label>
                    <label id="lblSenderMessage">Your Message: </label>
                    <textarea placeholder="Enter your message here" name="senderMessage" id="senderMessage" value={emailContent.senderMessage} onChange = {handleChange} required></textarea>
                    <p className="message">{message}</p>
                    <input type="submit" name="submitMessage" id="submitMessage" value="SEND" />
                </form>
            </div>

        </div>

    )
}

export default Contact