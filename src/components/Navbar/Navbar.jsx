import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <h3 className="link-style">{<Link to="/">Search</Link>}</h3>
      <h3 className="link-style">{<Link to="/my-list">My List</Link>}</h3>
    </div>
  );
};
