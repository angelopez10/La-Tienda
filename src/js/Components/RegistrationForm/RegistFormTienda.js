import React, {useContext} from 'react';
import {Context} from '../../AppContext';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter } from 'react-router-dom';


import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';






const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: 'none',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegistFormCliente(props) {
  const classes = useStyles();
  const {actions} = useContext(Context);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Formulario de Registro Tienda
        </Typography>
        <form className={classes.form} noValidate>
      
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre de la Tienda"
            name="nombre"
            autoComplete="nombre"
            autoFocus
            onChange={e => actions.handleChangeRegistroTienda(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="categoria"
            label="Categoria"
            name="categoria"
            autoComplete="categoria"
            autoFocus
            onChange={e => actions.handleChangeRegistroTienda(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="rut"
            label="Rut"
            name="rut"
            autoComplete="rut"
            autoFocus
            onChange={e => actions.handleChangeRegistroTienda(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => actions.handleChangeRegistroTienda(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="latitude"
            label="Latitude"
            name="latitude"
            autoComplete="latitude"
            autoFocus
            onChange={e => actions.handleChangeRegistroTienda(e)}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="longitude"
            label="Longitude"
            name="longitude"
            autoComplete="longitude"
            autoFocus
            onChange={e => actions.handleChangeRegistroTienda(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="clave"
            label="Clave"
            type="clave"
            id="clave"
            autoComplete="clave"
            onChange={e => actions.handleChangeRegistroTienda(e)}
          />
   
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </form>
      </div>

    </Container>
  );
}

export default withRouter(RegistFormCliente);