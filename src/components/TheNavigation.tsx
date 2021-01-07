import React from 'react'
import {NavLink} from "react-router-dom";

const TheNavigation: React.FC = () => {

    return (
        <nav className="flex justify-center items-center border-4 border-gray-100 rounded-full">
            <NavLink exact className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/tunes">Tunes</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
        </nav>
    )
}

export default TheNavigation