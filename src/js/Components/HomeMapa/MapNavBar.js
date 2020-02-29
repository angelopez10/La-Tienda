import React from 'react'

export default function MapNavBar() {
    return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul className="right hide-on-med-and-down">
                        <li>
                            <nav>
                                <div className="nav-wrapper">
                                    <form>
                                        <div className="input-field">
                                            <input id="search" type="search" required />
                                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                            <i className="material-icons">close</i>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                        </li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                </div>
            </nav>
    )
}
