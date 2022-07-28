import './App.css';
import Sidebar from "./SideBar"
import Chat from "./Chat"
import background from "./background.svg"

function App() {
  return (
      <div className="App">
        <div className="background">
          <img src={background} alt="background" />
        </div>
        <div className="app_container">
          <Sidebar className="sidebar" />
          <Chat className="chat" />
        </div>
      </div>
  );
}

export default App;
