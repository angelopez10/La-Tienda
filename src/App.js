import React from 'react';

import ModalView from './js/views/ModalView';

import SignIn from './js/Components/Modals/SigIn'
import HomeMap from './js/views/HomeMap'
import Home from './js/views/Home';
import Tienda from './js/views/Tienda';





function App() {


  return (
    <div className="App">

      <ModalView />
      <SignIn />


    </div>
  );
}

export default App;
