
function Navbar() {
  return (
    <nav className="navbar">

      <a href="/" className="logo">
        NOVA<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk ↗
      </a>

    </nav>
  );
}

export default Navbar;
