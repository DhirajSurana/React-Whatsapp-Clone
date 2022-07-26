import React from 'react'
import "./Sidebar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar_header">
        {/* left */}
        <div className="sidebar-header-left">
          <IconButton className="accountbutton"> <AccountCircleIcon fontSize='large' /> </IconButton>
        </div>
        {/* right */}
        <div className="sidebar-header-right">
          {/* 1 */}
          <IconButton> <DonutLargeIcon /> </IconButton>
          {/* 2 */}
          <IconButton> <ChatIcon /> </IconButton>
          {/* 3 */}
          <IconButton> <KeyboardArrowDownIcon /> </IconButton>
        </div>
      </div>
    </div>
  )
}

export default SideBar