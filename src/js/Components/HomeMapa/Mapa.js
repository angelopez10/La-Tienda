import React, { useState, useRef } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import "./Mapa.css";

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;

export default function Mapa() {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);


  const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url, { fetcher });
  const tiendas = data && !error ? data.slice(0, 200) : [];
  
 

 

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDrJx4thHq6csImpMoRlB8qy00-GQuhIQw' }}
        defaultCenter={{ lat: 52.6372, lng: -1.135171 }}
        defaultZoom={15}
      >
        {tiendas.map(tienda => (
              <Marker
                key={tienda.id}
                lat={tienda.location.latitude}
                lng={tienda.location.longitude}
                >
              <button className="crime-marker">
                <img src="/favicon.ico" alt="crime" />
              </button>
            </Marker>
          ))}
      </GoogleMapReact>
    </div>
  );
}
  














