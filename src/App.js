import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sphere from './js/Components/Sphere/Sphere'
import ModalView from './js/views/ModalView';
import SignIn from './js/Components/Modals/SigIn'
import HomeMap from './js/views/HomeMap'
import TiendaAdminView from './js/views/TiendaAdminView';








function App() {


  return (
    <div className="App">

      <TiendaAdminView />

    </div>
  );
}

export default App;
