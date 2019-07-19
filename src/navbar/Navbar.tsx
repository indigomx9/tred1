import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => (
    <nav className="navbar">
        <ul className="navbar__ul">
            <NavLink className="navbar__link" to="/">Home</NavLink>
            <NavLink className="navbar__link" to="/about">About</NavLink>
            <NavLink className="navbar__link" to="/jtodos">JTodos</NavLink>
        </ul>
    </nav>
);

