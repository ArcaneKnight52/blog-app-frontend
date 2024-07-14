import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="App flex flex-row">
        <div className=" bg-white text-black p-6 w-screen-1/2 h-screen">
          <Sidebar />
        </div>
        <div className="content bg-black text-white pt-6 m-6 w-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
