import { useState } from 'react'

export default function TextNotification({ textMessage, sendReply, navigateToInboxThread }) {
    const [reply, setReply] = useState("");

    return (
        <div className='text-notification-container'>
            <button onClick={() => navigateToInboxThread(textMessage.threadId)} className='text-notification-to-inbox'>
                <div className='circle-image'>
                    <img
                        src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
                        alt="icon"
                        className='image-icon image-inbox'>
                    </img>
                </div>
            </button>
            <form onSubmit={e => {
                e.preventDefault();
                sendReply(reply);
            }}>
                <div className='text-notification-message-container'>
                    <span className='message-title'>New message from:</span>
                    <span className='message-from'>{textMessage.from}</span>
                    <span className='message-text'>&#34;{textMessage.text}&#34;</span>
                    <textarea className='message-input' placeholder='Your reply to be sent' value={reply} onInput={(e) => setReply(e.target.value)}>
                    </textarea>
                    <button type='submit' className='message-send'>
                        <img
                            src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png"
                            alt="icon"
                            className='image-icon button-icon'>
                        </img>Send Reply
                    </button>
                </div>
            </form>
        </div>
    )
}