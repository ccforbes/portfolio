import React from 'react'
import styles from './*.module.css'

export const Contact: React.FC = () => {
    return <div className='container center-align section'>
        <h4>Contact Me</h4>
        <form>
            <input type="text" placeholder='NAME' />
            <input type="email" placeholder='EMAIL' />
            <textarea placeholder='YOUR MESSAGE'></textarea>
            <button className="button">Send</button>
        </form>
    </div>
}