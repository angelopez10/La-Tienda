import React, {useContext} from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Context } from '../../AppContext';

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
    },
  }),
);

export default function GroupedSelect() {
  const classes = useStyles();
  const { actions } = useContext(Context);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Categoria</InputLabel>
        <Select 
        native defaultValue="" 
        id="grouped-native-select"
        name = 'categoria'
        onChange={e => actions.handleChangeRegistroTienda(e)}
        >
          <option aria-label="None" value="" />
            <option value="viveres">Viveres</option>
            <option value='fruteria'>Frutas</option>
            <option value='abarrotes'>Abarrotes</option>
            <option value='verduderia'>Varios</option>
        </Select>
      </FormControl>
    </div>
  );
}
