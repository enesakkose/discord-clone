import React from 'react'
import ChatHeader from  './ChatHeader'
import AddCircleIcon  from '@material-ui/icons/AddCircle'
import CardGiftIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import './Chat.scss'


function Chat() {
  return (

    <div className='chat'>
      <ChatHeader/>

      <div className="chat__messages">
          <Message/>
          <Message/>
          <Message/>
      </div>

      <div className="chat__input">
          <AddCircleIcon fontSize="large"/>
          <form>
            <input type="text" placeholder={`Message #TESTCHANNEL`} />
            <button className="chat__inputButton" type='submit'>
              Send Message
            </button>
          </form>

          <div className="chat__inputIcons">
            <CardGiftIcon fontSize='large'/>
            <GifIcon fontSize='large'/>
            <EmojiEmotionIcon fontSize='large'/>
          </div>
      </div>
    </div>
  )
}

export default Chat