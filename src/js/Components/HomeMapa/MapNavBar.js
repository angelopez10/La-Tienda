import React from 'react'
import button from 'react-bootstrap/Button';
import './MapNavBar.css'; 



export default function MapNavBar() {
    return (
            <nav className="navbar navbar-light bg-color col-10 sticky-top">
                <a href= "#!" className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" id ="input" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </form>
            </nav>


            )
        }
