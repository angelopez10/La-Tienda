import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../AppContext";
import "./MapaMapBox.css"
import LigthMode from './LigthMode';


export default function MapaMapBoxLigth(props) {


  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 52.636879,
    longitude: -1.139759,
    width: "100vw",
    height: "100vh",
    zoom: 13
  });
  const [selectedTienda, setSelectedTienda] = useState(0);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.setMapa();
  }, []);

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
        {store.filteredTiendas.map(tienda => (
          <Marker
            key={tienda.id}
            latitude={parseFloat(tienda.location.latitude)}
            longitude={parseFloat(tienda.location.longitude)}
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
            latitude={parseFloat(selectedTienda.location.latitude)}
            longitude={parseFloat(selectedTienda.location.longitude)}
            onClose={() => {
              setSelectedTienda(null);
            }}
          >
            <div>
              <h2>{selectedTienda.id}</h2>
              <p>{selectedTienda.id}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}