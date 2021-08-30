import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnglesTriangles from "./angles-triangles";
import './App.css'; 
import CalculateArea from "./calculate-area";
import Hypotenuse from "./hypotenuse";
import Quiz from "./quiz";

function Navbar() {
  return (
      <div className="nav-bar">
      <Router>
        <div>
          <nav className="nav-section">
            <h2 className="logo">Fun with Triangles</h2>
            <ul className="non-bullet-list">
              <li className="list-item">
                <Link className="list-item-link" to="/">Is Traingle?</Link>
              </li>
              <li className="list-item">
                <Link className="list-item-link" to="/quiz">Quiz</Link>
              </li>
              <li className="list-item">
                <Link className="list-item-link" to="/hypotenuse">Hypotenuse</Link>
              </li>
              <li className="list-item">
                <Link className="list-item-link" to="/calculate">Calculate Area</Link>
              </li>
            </ul>
          </nav>
          <Switch>
              <Route path="/quiz">
                <Quiz/>
              </Route>
              <Route path="/hypotenuse">
                  <Hypotenuse/>
              </Route>
              <Route path="/calculate">
                <CalculateArea/>
              </Route>
              <Route path="/" strict>
                  <AnglesTriangles/>
              </Route>
          </Switch>

        </div>
      </Router>  
      </div>
    );
}


export default Navbar;