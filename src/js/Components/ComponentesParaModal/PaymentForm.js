import React, {useContext} from 'react';
import { Context } from '../../AppContext';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  const { actions } = useContext(Context);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Nombre del titular" name='nombre_tarjeta' onChange={e => actions.handleChange(e)} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Numero de tarjeta" name='numero_tarjeta' onChange={e => actions.handleChange(e)} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Fecha de vencimiento" name='fecha_vencimiento' onChange={e => actions.handleChange(e)} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name='cvv'
            label="CVV"
            helperText="Ultimos tres digitos en la parte trasera de la tarjeta"
            onChange={e => actions.handleChange(e)}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}