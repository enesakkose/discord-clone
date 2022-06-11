import React from 'react'
import { Avatar } from '@material-ui/core'
import './Message.scss'

function Message() {
  return (
    <div className='message'>
        <Avatar/>
        <div className="message__info">
            <h4>
                enstw
            <span className="message__timestamp">
                this is timestamp
            </span>
            </h4>

            <p>This is a message</p>
        </div>
    </div>
  )
}

export default Message