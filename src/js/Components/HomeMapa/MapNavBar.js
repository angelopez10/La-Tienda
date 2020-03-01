import React from 'react'
import button from 'react-bootstrap/Button';
import './MapNavBar.css'; 



export default function MapNavBar() {
    return (
            <nav className="navbar navbar-light bg-light col-10">
                <a href= "#!" className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" id ="input" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </form>
            </nav>

<nav className="navbar navbar-light  col-10">
<p href= "#!" className="navbar-brand"></p>
<form className="form-inline">
    <input className="form-control mr-sm-2" style={{width:'350px'}} id ="input" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
 </form>
</nav>
            )
        }
