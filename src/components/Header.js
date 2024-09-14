import React from "react";
import { Link } from "react-router-dom"; // Import Link komponenty pro navigaci

function Header() {
  return (
    <header>
      <h2>Hlavicka</h2>
      <nav>
        <ul>
          <li><Link to="/">První stránka</Link></li>
          <li><Link to="/pet">PET stránka</Link></li>
          <li><Link to="/treti">Treti stránka</Link></li>
          <li><Link to="/treti2">Treti stránka2</Link></li>
          {/* <li><Link to="/druha">Druhá stránka</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
