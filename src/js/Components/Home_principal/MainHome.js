import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function MainHome() {
  //Checkear imagen de fondo, usar carpeta img en public
  return (
    <div className="main">
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="Ingresa tu dirección"
            />
            <Link to='/login' className="search_icon">
            <FontAwesomeIcon icon={faSearch} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
