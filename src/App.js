import React from 'react';
import HomeMap from './js/views/HomeMap'




import 'materialize-css/dist/css/materialize.min.css';
import Home from './js/views/Home';
import SimpleMap from './js/Components/Home_mapa/Mapa';


function App() {


  return (
    <div className="App">

      <Home />
      <SimpleMap />

      <HomeMap />

    </div>
  );
}

export default App;
