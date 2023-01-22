import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Calories from './components/Calories';
import RM from './components/1rm';

function App() {
  const logo = 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg';
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><img src={logo} alt='NASA Logo' className="brand"></img></Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/calories" className="nav-link">Calories</Link>
              <Link to="/1rm" className="nav-link">1RM</Link>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <div className="container">
        <Routes>
          <Route path="/" element={<Calories />} />
          <Route path="/calories" element={<Calories />} />
          <Route path="/1rm" element={<RM />} />
        </Routes>
      </div>
      <br />
    </Router>
  );
}

export default App;
