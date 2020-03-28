import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/views/Home';
import HomeMap from './js/views/HomeMap';
import Tienda from './js/views/Tienda';
import TiendaAdminView from './js/views/TiendaAdminView';
import injectContext from './js/AppContext';
import CheckoutView from './js/views/CheckoutView';



function App() {

  return (
    <Router>
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mapa' exact component={HomeMap} />
          <Route path='/tienda' exact component={Tienda} />
          <Route path='/admin' exact component={TiendaAdminView} />
          <Route path='/checkout' exact component={CheckoutView} />
        </Switch>
      
      </Router>
  );
}

export default injectContext(App);
