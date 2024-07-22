import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyBlogs from './pages/MyBlogs';
import Settings from './pages/Settings';
import About from './pages/About';
import Contact from './pages/Contact';
import NewBlog from './pages/NewBlog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App flex flex-row h-screen">
        <Sidebar />
        <div className="content flex-1 bg-gray-100 text-gray-900 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-blogs" element={<MyBlogs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new" element={<NewBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
