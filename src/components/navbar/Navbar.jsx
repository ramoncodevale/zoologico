import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar" id="navbar">
      <div className="app__navbar-logo">
        <h1>ANIMAIS</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="link-navbar">
          <a href="#home">Inicio</a>
        </li>
        <li className="link-navbar">
          <a href="#about">Museu</a>
        </li>
        <li className="link-navbar">
          <a href="#history">Atrações</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#">
          <BsFacebook color="#FFF" fontSize={20} />
        </a>
        <a href="#">
          <BsInstagram color="#FFF" fontSize={20} />
        </a>
        <a href="#">
          <BsTwitter color="#FFF" fontSize={20} />
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="link-navbar">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Inicio
                </a>
              </li>
              <li className="link-navbar">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Museu
                </a>
              </li>
              <li className="link-navbar">
                <a href="#history" onClick={() => setToggleMenu(false)}>
                  Atrações
                </a>
              </li>
              <li className="link-navbar">
                <a href="#">
                  <BsFacebook color="#FFF" fontSize={20} />
                </a>
                <a href="#">
                  <BsInstagram color="#FFF" fontSize={20} />
                </a>
                <a href="#">
                  <BsTwitter color="#FFF" fontSize={20} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
