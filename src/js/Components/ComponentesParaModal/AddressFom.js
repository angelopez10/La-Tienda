import React, {useContext} from 'react';
import { Context } from '../../AppContext';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  const { actions } = useContext(Context);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre_user"
            label="Nombre"
            fullWidth
            autoComplete="fname"
            onChange={e => actions.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="apellido"
            name="apellido"
            label="Apellido"
            fullWidth
            autoComplete="lname"
            onChange={e => actions.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="direccion"
            name="direccion"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            onChange={e => actions.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="direccion2"
            name="direccion2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            onChange={e => actions.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ciudad"
            name="ciudad"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            onChange={e => actions.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="region" name="region" label="State/Province/Region" onChange={e => actions.handleChange(e)}fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="codigo_postal"
            name="codigo_postal"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            onChange={e => actions.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pais"
            name="pais"
            label="Country"
            fullWidth
            autoComplete="billing country"
            onChange={e => actions.handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}