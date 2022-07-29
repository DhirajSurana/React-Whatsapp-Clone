import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import React from 'react'
import "./Chat.css"
import Message from "./Message"


function Chat() {
  return (
    <div className="chat">
      {/* container */}
      <div className="chat_container">
        {/* header */}
        <section className="chat-header">
          {/* left */}
          <div className="chat-header-left">
            <IconButton>
              <AccountCircleIcon fontSize='large' />
            </IconButton>
            <div className="chat-header-userdetails">
              <div className="chat-header-username">
                <h4>Dhiraj Surana</h4>
              </div>
              <div className="chat-header-userstatus">
                <p>Online</p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="chat-header-right">
            <IconButton className='chat-header-video'>
              <VideocamRoundedIcon />
            </IconButton>

            <IconButton className="chat-header-call">
              <PhoneRoundedIcon fontSiz="small" />
            </IconButton>

            <IconButton className="chat-header-verticalDots">
              <MoreVertRoundedIcon />
            </IconButton>
          </div>
        </section>

        <section className='chat-messages'>
          <Message className="message message-sent" />
          <Message className="message message-recieved" />
          <Message className="message message-recieved" />
          <Message className="message message-sent" />
          <Message className="message message-sent" />
          <Message className="message message-sent" />
          <Message className="message message-sent" />
          <Message className="message message-sent" />
          <Message className="message message-sent" />
          <Message className="message message-sent" />
        </section>

        <section className='chatbar'>
          <div className='chatbar-left'>
            <IconButton> <SentimentSatisfiedRoundedIcon /> </IconButton>
            <IconButton className="attachment"> <AttachFileRoundedIcon /> </IconButton>
          </div>
          <input placeholder='Type a message' type="text"></input>
          <div className="chatbar-right">
            <IconButton> <KeyboardVoiceRoundedIcon /> </IconButton>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Chat