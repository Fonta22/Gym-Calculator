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
  const logo = 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Patch_of_the_OMON.svg';
        //'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA+VBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3////9/f36+vr8/Pz7+/v7+/v7+/v7+/v////r6+vn5+fk5OT5+fn19fX4+Pju7u7v7+/o6Ojx8fH09PTy8vLz8/Pj4+P39/fm5ubp6eni4uL8/Pzw8PDt7e329vbs7Ozg4ODh4eHe3t7l5eX6+vrd3d3q6urf39/c3NzbRDf7+/vb29vW1tbZ2dk+D9arAAAALXRSTlMA/eIxBfACHj3YwhYJDyfOtfr2WHObgEqpjellgY6c6mZLV3L2qKjOZemN+rUv7NpAAAACcUlEQVR4Xu2U53baQBQGAxiMaQZT3Wt6rnql9uKW9v4Pk5XEspG4WFmJ/GMeYM635cy7/8yePXv23N7uxnNwdHSwE1ENoLYLTz4NkM7vQHQFhKv4nlQCCIlUbFEOXHJxPVVYUY3nKSSpKFmIJbqANRdxPIcnTHRyGEPUAga0onuy4CMb1ZM5Bh/HmYiiGwhwE81TvIYA18VIokvY4DKKp1SBDSqlCKIyIJT5PU1AafL3FVC4q1uDLdS4+4rCXd06bKXO21fKdxcNKFzVzUFQ9KoDJRehr0z0tBgBpcrfVyZavAxM7uo2ABHNO8s2NTW4+8pEs4HUMxS+6rYAEZFBYl+Y8FQ3C5hoIImGMNVVvLp4X1FRZ2n0BU035X+u7jmgomWv/zzWR23lB7ich/b1DBeRQVNNty1FHYLDWVh1TwEXic4gs6105UfPdMrd1/HCffrnqTayrYkqP3qmSom7r9q84xyMDLIUx7Mylfn7OvIGmbYyUYmGbmry99UWnYOZ7sFc5OHb1b2HLbS9QV1vED3dPX9fQXFuWiEeF9kzpfMcfaUZkbyn9+bQTfXwvm4W0iA3RNdQUyIV1lekkDOhSx3sdGh17+At0ctA0plDpr/gLqSvSI+kXt8mAj9DVl20r3hGBM0iOwKmBtZXHOPX79fFXCJ/Ure79Gxr40Owuu9hK8LPp1mnR7JmWuv7ZsM+oH3FGZObFoWx3iY/Ul1J2LVn0b7i6B2RZM1WumwL833MoH3FMQ1hPHIGsadnvk94X3EsctPE4xK8p89FvK84ExIRuoUa6Pt98fU1DJUMosj+3/S15OtrGOsB9LnYqm+e5w+es4JAhYQDdgAAAABJRU5ErkJggg==';
        //'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg';
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
