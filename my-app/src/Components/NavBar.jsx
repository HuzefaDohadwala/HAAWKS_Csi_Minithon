import React from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <div className="logo">Nexus</div>
        <ul className="navigation">
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/about">PROFILE</Link>
          </li>
          <li>
            <Link to="/discover">DASHBOARD</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars on" id="on"></i>
        </div>
        <div className={`alert ${isOpen ? "open" : ""}`}>
          <i className="fas fa-times close" onClick={toggleMenu}></i>
          <ul className="navigation1">
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/about">PROFILE</Link>
            </li>
            <li>
              <Link to="/discover">DASHBOARD</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
