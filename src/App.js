import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" Component={Login}/>
          {/* <Route path="/signup" Component={SignUp} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
