import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import HomeMap from './js/views/HomeMap'
import M from 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/js/materialize'


function App() {
  useEffect(() => {
      var elems = document.querySelectorAll('.sidenav');
      let options = {
        edge: 'left'
      };
      M.Sidenav.init(elems, options);
    }, [])

  return (
    <div className="App">
      <HomeMap />
    </div>
  );
}

export default App;
