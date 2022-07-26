import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import React from 'react'
import "./Chat.css"


function Chat() {
  return (
    <div className="chat">

      {/* container */}
      <div className="chat_container">
        {/* header */}
        <div className="chat-header">
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
              <VideocamRoundedIcon fontSize='large' />
            </IconButton>

            <IconButton className="chat-header-call">
              <PhoneRoundedIcon />
            </IconButton>

            <IconButton className="chat-header-verticalDots">
              <MoreVertRoundedIcon />
            </IconButton>
          </div>
        </div>
        <div className='chat-messages'>
          </div>
          <div className='chat-bar'>
            <div className='chat-bar-left'>

            </div>
          </div>
        </div>
      </div>
  )
}

export default Chat