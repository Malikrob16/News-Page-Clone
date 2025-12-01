import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="main-nav">
      <img src="./assets/images/logo.svg" alt="Site Logo"className="site-logo"/>

      {/* Desktop Nav */}
      <ul className="desktop-nav">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">New</a></li>
        <li className="nav-item"><a href="#">Popular</a></li>
        <li className="nav-item"><a href="#">Trending</a></li>
        <li className="nav-item"><a href="#">Categories</a></li>
      </ul>

      {/* Menu Button */}
      <button className="menu-button"
      onClick={() => setMenuOpen(true)}>
        <img src="./assets/images/icon-menu.svg" alt="menu button"/>
      </button>

      {/* Mobile Nav */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </nav>
  );
}

export default Navbar;