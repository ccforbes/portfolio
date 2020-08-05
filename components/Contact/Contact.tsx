import React from 'react'
import styles from './*.module.css'

export const Contact: React.FC = () => {
    return <>
        <h4>Contact Me</h4>
        <form>
            <input type="text" placeholder='NAME' />
            <input type="email" placeholder='EMAIL' />
            <textarea placeholder='YOUR MESSAGE'></textarea>
            <button className="button">Send</button>
        </form>
    </>
}