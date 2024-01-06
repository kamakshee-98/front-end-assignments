
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Addsales from './pages/Addsales';
import Sales from './pages/Sales';
import Revenue from './pages/Revenue';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/addsales" element={<Addsales />}></Route>
          <Route exact path="/sales" element={<Sales />}></Route>
          <Route exact path="/revenue" element={<Revenue />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
