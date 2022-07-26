import './App.css';
import Sidebar from "./SideBar"
import Chat from "./Chat"

function App() {
  return (
    <>
      <div className="background">
        <div className="background-up"></div>
        <div className="background-down"></div>
      </div>
      <div className="App">
        <div className="app_container">
          <Sidebar className="sidebar" />
          <Chat className="chat" />
        </div>
      </div>
    </>
  );
}

export default App;
