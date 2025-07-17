import { NavLink } from 'react-router-dom';
import './navbar.css';
import { BotonVoz } from '../../utilities/BotonVoz';


export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <img
          className="gradient-border d-inline-block align-text-top"
          src="/raul.png"
          alt="foto de Raúl Rodríguez"
          width="110px"
          height="100%"
        />
        <p className="fs-2 ms-5 me-5">Raúl Rodríguez Clavero - Game Developer 🎮 </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0 fs-2 justify-content-evenly">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/educacion" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experiencia" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portafolio" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <BotonVoz/>
    </>
  );
};