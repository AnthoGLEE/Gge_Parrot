import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-light navbar-expand-md text-center py-3">
        <div className="container">
          <a className="d-flex align-items-center" href="/">
            <img src="./img/LogoParrot.png" className="d-inline-block mt-0 pt-0" alt="Logo de Parrot Garage" />
          </a>
 
          <div id="navcol-3" className="nav-link navbar-collapse" style={{ background: '#D9D9D9' }}>
            <ul className="navbar-nav d-flex align-items-center" style={{ height: '100px' }}>
              <li className="nav-item"><a className="nav-link" href="/">Nos véhicules</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Atelier et services</a></li>
              <li className="nav-item"><a className="nav-link" href="/">L'avis de nos clients</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Contactez nous</a></li>
            </ul>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-3">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon text-bg-light"></span>
          </button>
            <button className="btn" type="button">Connexion</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
