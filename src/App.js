import './App.css';
import Sidebar from "./SideBar"
import Chat from "./Chat"
// import { useEffect } from 'react';
// import Pusher from 'pusher-js';
// import axios from "./axios";
// import { useState } from 'react';
// import background from "./background.svg"

function App() {
  // const[messages, setMessages] = useState([])

  // useEffect(() => {
  //   axios.get("/api/v1/messages/sync").then(response => { 
  //     setMessages(response.data);
  //   })
  // }, []);

  // useEffect(() => { 
  //   const pusher = new Pusher('642f0af35a00a53c25f5', {
  //     cluster: 'ap2'
  //   });
  //   const channel = pusher.subscribe('messages'); 
  //   channel.bind('insert', function (data) {
  //     setMessages([...messages, data]);

  //     return() => {
  //       channel.unbind_all();
  //       channel.unsubscribe();
  //     }
  //   });
  // }, [messages])

  return (
      <div className="App">
        {/* <div className="background">
          <img src={background} alt="background" />
        </div> */}
        <div className="app_container">
          <Sidebar className="sidebar" />
          <Chat className="chat" />
        </div>
      </div>
  );
}

export default App;
