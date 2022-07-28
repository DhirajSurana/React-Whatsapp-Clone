import React from 'react'
import "./SidebarChat.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';


function SidebarChat() {
    return (
        <div className="sidebar-chat-wrapper">
            <div className="sidebarchat-container">
                <IconButton> <AccountCircleIcon fontSize='large' /> </IconButton>
                <div className="user-info">
                    <h4>Dhiraj Surana</h4>
                    <p>last message</p>
                </div>
                <div className="message-info">
                    <p className="time">00:00</p>
                    <div className="no-of-messages">
                        <p>7</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarChat