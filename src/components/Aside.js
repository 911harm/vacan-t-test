import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Aside extends Component {
    render() {
        return (
            <aside id="sidebar">
            <div id="nav-blog" className="sidebar-item">

                <h3>Pudes hacer esto</h3>
                <NavLink to="/Add">Agregar Persona</NavLink>

            </div>
        </aside>
        )
    }
}
