import { Link } from "react-router-dom";
import "../App.css";
function Nav() {
  return (
    <nav className="navbar bg-warning">
      <Link to="/" className="navbar-brand header mx-5">
        CRUD operations
      </Link>
      <div className="nav mx-5">
        <Link to="/create-student" className="nav-link">
          Create Student
        </Link>
        <Link to="/student-list" className="nav-link">
          Student List
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
