import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../AppContext";
import "./MapaMapBox.css"
import LigthMode from './LigthMode';


export default function MapaMapBoxLigth(props) {

  const { store, actions } = useContext(Context);
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: -33.448891,
    longitude: -70.669266,
    zoom: 12
  });
  const [selectedTienda, setSelectedTienda] = useState(0);
  

  

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedTienda(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

 

 
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/jarb29/ck8brlfqh2b0n1itm4t8eiqai'
        onViewportChange={viewport => {
          setViewport(viewport);
        }}

      >
        <LigthMode />
        {store.contacts.map(tienda => (
          <Marker
            key={tienda.id}
            latitude={parseFloat(tienda.latitude)}
            longitude={parseFloat(tienda.longitude)}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedTienda(tienda);
              }}
            >
              <img src="/favicon.ico" alt="crime" />
            </button>
          </Marker>
        ))}

        {selectedTienda ? (
          <Popup
            latitude={parseFloat(selectedTienda.latitude)}
            longitude={parseFloat(selectedTienda.longitude)}
            onClose={() => {
              setSelectedTienda(null);
            }}
          >
            <div>
              <h3>{selectedTienda.nombre}</h3>
              <p>Categoria: {selectedTienda.categoria}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}