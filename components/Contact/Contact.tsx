import React, {useState} from 'react'
import * as emailjs from 'emailjs-com'
import styles from './Contact.module.css'


export const Contact: React.FC = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const sendEmail = (event: React.FormEvent) => {
        event.preventDefault()
        const { name, email, message } = state;
        if (name === "") {

        }
        if (email === "") {

        }
        if (message === "") {

        }

        const templateParms = {
            from_email: email,
            reply_to: email,
            subject: `Message from ${name} from your website!`,
            to_name: "Chris Forbes",
            from_name: name,
            message_html: message
        }

        emailjs.send(
            "gmail",
            "template_F0e6DJN9",
            templateParms,
            "user_6CSqsyEIWzyzKudyIOzcS"
        )

        setState({
            name: "",
            email: "",
            message: ""
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void | undefined => {
        const { name, value } = event.target
        setState({
            ...state,
            [name]: value
        })
    }

    return <div className='container center-align section'>
        <h4><strong>Contact Me</strong></h4>
        <p>Please feel free to send me an email about any opportunities!</p>
        <form onSubmit={sendEmail}>
            <input 
                type="text" 
                value={state.name} 
                placeholder='NAME' 
                name="name" 
                onChange={handleChange} />
            <input 
                type="email" 
                value={state.email} 
                placeholder='EMAIL' 
                name="email" 
                onChange={handleChange} />
            <textarea
                value={state.message} 
                placeholder='YOUR MESSAGE' 
                name="message" 
                onChange={handleChange} />
            <button className={"btn waves-effect waves-light " + styles.button} type="submit" name="action">
                Submit
                <i className="material-icons right">send</i>
            </button>
        </form>
    </div>
}