import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Context } from "../../AppContext";
import { Link } from 'react-router-dom'

export default function DarkMode() {
  const [checked, setChecked] = React.useState(false);
  const { store, actions } = useContext(Context);


  const toggleChecked = () => {
    setChecked((prev) => !prev);
    actions.toggleChecked(checked);
  };
 
  
  return (
    
    <FormGroup   style={{ color:(store.value? 'white': 'black'),
    position:'fixed',
    left: '100px',
    top: '100px'}}
    >
      <Link to='/mapaLigth'>
      <FormControlLabel
        control={<Switch color="primary" checked={checked} onChange={toggleChecked}/>}
      />
       </Link>
      </FormGroup>
     
 
    
  );
}