import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Register from './Register'
import Prime from './Prime'

function Navbar() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <NavLink to="/" >
                                <li className="nav-item active">
                                    <a className="nav-link">Home</a>
                                </li>
                            </NavLink>

                            <NavLink to="/Prime">
                                <li className="nav-item">
                                    <a className="nav-link">Prime</a>
                                </li>
                            </NavLink>

                            <NavLink to="/Register">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" role="button" >Register</a>
                                </li>
                            </NavLink>

                        </ul>

                    </div>

                </nav>
            </div>

            <Routes>
                <Route path='/Prime' element={<Prime />}></Route>
                <Route path='/Register' element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar