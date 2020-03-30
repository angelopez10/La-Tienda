import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/views/Home';
import HomeMap from './js/views/HomeMap';
import Tienda from './js/views/Tienda';
import TiendaAdminView from './js/views/TiendaAdminView';
import injectContext from './js/AppContext';
import CheckoutView from './js/views/CheckoutView';
import MapaMapBoxDark from './js/Components/HomeMapa/MapaMapBoxDark';
import MapaMapBoxLigth from './js/Components/HomeMapa/MapaMapBoxLigth';





function MapaLigth() {
  return (
    <div>
        <HomeMap />
        <Route path='/mapaLigth' exact component={MapaMapBoxLigth} />
    </div>
  );
}

function MapaDark() {
  return (
    <div>
        <HomeMap />
        <Route path='/mapaDark' exact component={MapaMapBoxDark} />
    </div>
  );
}




function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mapaLigth' exact component={MapaLigth} />
          <Route path='/mapaDark' exact component={MapaDark} />
          <Route path='/tienda' exact component={Tienda} />
          <Route path='/admin' exact component={TiendaAdminView} />
        </Switch>
      </Router>
  );
}

export default injectContext(App);
