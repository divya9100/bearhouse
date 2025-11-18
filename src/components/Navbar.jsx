import "./Navbar.css";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="nav">

      {/* Left Menu */}
      <div className="nav-left">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Culture</a>
        <a href="#">Explore</a>
      </div>

      {/* Center Logo */}
      <div className="nav-logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Right Menu */}
      <div className="nav-right">
        <a href="#">Events</a>
        <a href="#">Gallery</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
        <FiSearch className="search-icon" />
      </div>

    </nav>
  );
}

