import React, {useContext} from 'react';
import {Context} from '../../AppContext';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

export default function RegistFormCliente(props) {
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
          Formulario de Registro Cliente
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Nombre"
            label="Nombre"
            name="nombre"
            autoComplete="Nombre"
            onChange={e => actions.handleChange(e)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Apellido"
            label="Apellido"
            name="apellido"
            onChange={e => actions.handleChange(e)}
            autoComplete="Apellido"
            autoFocus
          />


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={e => actions.handleChange(e)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Direccion"
            label="Direccion"
            name="direccion"
            onChange={e => actions.handleChange(e)}
            autoComplete="Direccion"
            autoFocus
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="telefono"
            label="telefono"
            type="telefono"
            id="telefono"
            autoComplete="Telefono"
            onChange={e => actions.handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="clave"
            label="Clave"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => actions.handleChange(e)}
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