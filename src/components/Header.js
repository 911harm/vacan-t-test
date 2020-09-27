import React, { Component } from 'react';
import logo from '../assets/image/logo.svg';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    menuToggle = () => {
        let element = document.getElementById("colp");
        element.classList.toggle("view");
    }
    render() {
        return (
            <header>
                <div className="center">

                    <div className="logo">
                        <img src={logo} className="app-logo" alt="" />
                        <span id="brand">911<strong>harm</strong></span>
                    </div>
                    <div id="menu-colap" onClick={this.menuToggle}>
                        <i className="fas fa-bars " ></i>
                    </div>

                    <div id="colp" className="colp">
                        <h2>911harm</h2>
                        <span id="close" onClick={this.menuToggle}>X</span>

                        <ul>
                            <li><NavLink to={"/home"} activeClassName="active">Inicio</NavLink></li>
                            <li><NavLink to={"/Add"} activeClassName="active">Añadir</NavLink></li>
                        </ul>

                    </div>

                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to={"/home"} activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Add"} activeClassName="active">Añadir</NavLink>
                            </li>

                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}
