import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function MainHome() {
  //Checkear imagen de fondo, usar carpeta img en public
  return (
    <div className="main">
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <input
              class="search_input"
              type="text"
              name=""
              placeholder="Ingresa tu dirección"
            />
            <a href="#" class="search_icon">
            <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
