import React, { useState, useRef, useContext, useEffect } from "react";
import { Context } from "../../AppContext";
//import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import "./Mapa.css";


//const fetcher = (...args) => fetch(...args).then(response => response.json());
const Marker = ({ children }) => children;

export default function Mapa(props) {
  

  const { store, actions } = useContext(Context);
  const mapRef = useRef(null);
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    actions.setMapa();
//actions.setTienda();
  }, []);
 

  //const [filterCategory, setFilterCategory] = React.useState(null);


  //const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  //const { data, error } = useSwr(url, { fetcher });
  //const tiendas = data && !error ? data.slice(0, 200) : [];





  //const categories = [...new Set(tiendas.map(tienda => tienda.category))]
  //const filteredTiendas = filterCategory ? tiendas.filter(tienda => tienda.category === filterCategory) : tiendas;



  /*
{categories.map(category => (
  <button
    onClick={() => {
      setFilterCategory(category);
    }}
    key={category}
  >
    {category}
  </button>
))}
{filterCategory && (
  <button
    onClick={() => {
      setFilterCategory(null);
    }}
  >
    reset
  </button>
)}
*/








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
          >
            <button className="crime-marker"
              onClick={() => {
                const expansionZoom = 17;
                mapRef.current.setZoom(expansionZoom);
                console.log(mapRef.current);
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







/*
{categories.map(category => (
  <button
    onClick={() => {
      setFilterCategory(category);
    }}
    key={category}
  >
    {category}
  </button>
))}
{filterCategory && (
  <button
    onClick={() => {
      setFilterCategory(null);
    }}
  >
    reset
  </button>
)}
*/








