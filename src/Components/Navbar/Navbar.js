import React, { useState } from "react";

import { Button } from "../Pages/Button";
import { Link } from "react-router-dom";
import Dropdown from "../Pages/Dropdown";
import MenuIcon from '@mui/icons-material/Menu';
import { activeUserState } from "../Atoms/userAtom";

import './Navbar.css'
import { useRecoilState } from "recoil";

const Navbar = () => {
  const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
  const [activeUser, setActiveUser] = useRecoilState(activeUserState);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if(window.innerWidth < 860){
			setDropdown (false)
		} else {
			setDropdown (true);
		}
	}
	const onMouseLeave = () => {
		if(window.innerWidth < 860){
			setDropdown (false)
		} else {
			setDropdown (false);
		}
	}

  return (
    <>
      <nav className="navbar">
        <Link to="/home" className="navbar-logo">
          SkinMed 
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/iniciar-consulta" className="nav-links" onClick={closeMobileMenu}>
              Iniciar Consulta
            </Link>
          </li>
					<li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
            <Link to="/agregar-paciente" className="nav-links" onClick={closeMobileMenu}>
              Pacientes 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/procedimientos" className="nav-links" onClick={closeMobileMenu}>
              Procedimientos
            </Link>
          </li>
					
          <li className="nav-item">
            <Link to="/agenda" className="nav-links" onClick={closeMobileMenu}>
              Agenda
            </Link>
          </li>
					<li className="nav-item">
            <button className="nav-links-mobile" onClick={()=>setActiveUser(null)}>
              Cerrar Sesion
            </button>
          </li>
          
        </ul>
				<Button />
      </nav>
    </>
  );
};

export default Navbar;
