import React, {useContext} from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Context } from "../../AppContext";

export default function DarkMode() {
  const [checked, setChecked] = React.useState(false);
  const { store, actions } = useContext(Context);


  const toggleChecked = () => {
    setChecked((prev) => !prev);
    actions.toggleChecked(checked);
  };

  

  




  return (
    <FormGroup   style={{color:(!store.value? 'white': 'black')}}>
      <FormControlLabel
        style={{width:"7%",   position: 'absolute',
        left: '1100px',
        top: '350px'}}
    
        control={<Switch color="primary" checked={checked} onChange={toggleChecked}/>}
        label="Darkmode"
        labelPlacement="start"
      
      />
    </FormGroup>
  );
}