import React, {useState, useEffect} from 'react'
import ChatHeader from  './ChatHeader'
import AddCircleIcon  from '@material-ui/icons/AddCircle'
import CardGiftIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmotionIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db from '../firebase'
import {selectChannelId ,selectChannelName} from '../features/appSlice'
import firebase from 'firebase'
import './Chat.scss'


function Chat() {
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(()=> {
  if(channelId){
     db.collection('channels')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => 
      setMessages((snapshot.docs.map((doc) => doc.data())))
      ) 
    }
    
  }, [channelId])

  const sendMessage = (e) => {
     e.preventDefault()

     db.collection('channels').doc(channelId).collection('messages').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
     })

     setInput('')
  }

  return (

    <div className='chat'>
      <ChatHeader channelName={channelName}/>

      <div className="chat__messages">
          {messages.map((message) =>(
            <Message
             timestamp= {message.timestamp}
             message= {message.message}
             user= {message.user}
            />
          ))}
                  
      </div>

      <div className="chat__input">
          <AddCircleIcon fontSize="large"/>
          <form>
            <input
             value={input}
             onChange={(e) => setInput(e.target.value)}
             disabled={!channelId}
             type="text" 
             placeholder={`Message #${channelName}`} 
             
             />
            <button 
             className="chat__inputButton" 
             type='submit'
             disabled={!channelId}
             onClick={sendMessage}
            >
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