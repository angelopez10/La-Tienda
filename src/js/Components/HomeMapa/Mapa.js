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

  useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);



 




  // kkkkkk

  return (
    <div style={{ height: "100vh", width: "100%" }}>

      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDrJx4thHq6csImpMoRlB8qy00-GQuhIQw' }}
        defaultCenter={{ lat: 52.6372, lng: -1.135171 }}
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
            lat={tienda.location.latitude}
            lng={tienda.location.longitude}
            onmouseover= {store.filteredTiendas.id}
          >
            <button className="crime-marker"
              onClick={() => {
                const expansionZoom = 17;
                mapRef.current.setZoom(expansionZoom);
                mapRef.current.panTo({ lat: parseFloat(tienda.location.latitude), lng: parseFloat(tienda.location.longitude) });
              }}>
              <img src="/favicon.ico" alt="crime" />
            </button>
          
          </Marker>
        ))}
      
      </GoogleMapReact>
    </div>
  );
}














