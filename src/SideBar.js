import React from 'react'
import "./Sidebar.css"
import SidebarChat from "./SidebarChat"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';

function SideBar() {
  return (
    <section className="sidebar-container">
      <section className="sidebar_header">
        {/* left */}
        <div className="sidebar-header-left">
          <IconButton className="accountbutton"> <AccountCircleIcon fontSize='large' /> </IconButton>
        </div>
        {/* right */}
        <div className="sidebar-header-right">
          <IconButton> <DonutLargeIcon /> </IconButton>
          <IconButton> <ChatIcon /> </IconButton>
          <IconButton> <KeyboardArrowDownIcon /> </IconButton>
        </div>
      </section>

      <section className="sidebar-search-container">
          <div className="sidebar-search-box-left">
            <SearchOutlinedIcon />
            <input placeholder='Search or start new chat' type="text"></input>
        </div>
        <IconButton className='list-icon'> <FilterListIcon  /> </IconButton>
      </section>
      <section className='sidebar-chat-container'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        
      </section>
    </section>

  )
}

export default SideBar