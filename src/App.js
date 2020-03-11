import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/views/Home';
import HomeMap from './js/views/HomeMap';
import Tienda from './js/views/Tienda';
import TiendaAdminView from './js/views/TiendaAdminView';
import Checkout from './js/Components/ModalCierre/Checkout';
import ModalLogin from './js/Components/Modales/ModalLogin';



function App() {
  return (
    <Router>
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/mapa' exact component={HomeMap} />
          <Route path='/tienda' exact component={Tienda} />
          <Route path='/admin' exact component={TiendaAdminView} />
        </Switch>
      
      </Router>
  );
}

export default App;
