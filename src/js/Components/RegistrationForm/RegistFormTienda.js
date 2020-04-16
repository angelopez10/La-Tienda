import React, { useContext} from 'react';
import { Context } from '../../AppContext';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GroupedSelect from './categoriasTienda';
import Autocomplete from './Autocomplete'






const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: 'none',
  },
  avatar: {
    margin: theme.spacing(1), 
    backgroundColor: '#ff8d1e',
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
  const { actions } = useContext(Context);







  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrate
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

          <GroupedSelect />

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

          <Autocomplete />

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
        </form>
      </div>
    </Container>
  );
}

export default withRouter(RegistFormCliente);