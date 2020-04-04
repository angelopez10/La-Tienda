import React, { useState, useRef, useContext, useEffect} from "react";
import { Context } from "../../AppContext";
import GoogleMapReact from "google-map-react";
import "./Mapa.css";





const Marker = ({ children }) => children;

export default function Mapa(props) {
  const { store, actions } = useContext(Context);
  const mapRef = useRef(null);
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
 
  useEffect(() => {
    actions.setMapa();
  }, []);


  return (
    <div style={{ height: "100vh", width: "100%" }}>

      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDrJx4thHq6csImpMoRlB8qy00-GQuhIQw' }}
        defaultCenter={{ lat: -33.448891, lng: -70.669266 }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals

        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >
        {store.filteredTiendas.map(tienda => (
          <Marker
            key={tienda.id}
            lat={tienda.latitude}
            lng={tienda.longitude}
          >
            <button className="crime-marker"
              onClick={(e) => {
                e.preventDefault();
                const expansionZoom = 17;
                mapRef.current.setZoom(expansionZoom);
                mapRef.current.panTo({ lat: parseFloat(tienda.latitude), lng: parseFloat(tienda.longitude) });
              }}
              >
              <img src="/favicon.ico" alt="crime" />
            </button>
          </Marker>
        ))}
      </GoogleMapReact>
    </div>
  );
}














