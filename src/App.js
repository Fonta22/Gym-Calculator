import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Calories from './components/Calories';

function App() {
  const logo = 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg';
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><img src={logo} alt='NASA Logo' className="brand"></img></Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">Calories</Link>
              <Link to="#" className="nav-link">1RM</Link>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <div className="container">
        <Routes>
          <Route path="/" element={<Calories />} />
          {/*<Route path="/" element={<1RM />} />*/}
        </Routes>
      </div>
      <br />
    </Router>
  );
}

export default App;
