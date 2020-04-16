import React, {useContext}  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Context} from '../../AppContext';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';




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
    backgroundColor: '#ff8d1e',
    '&:hover': {
      backgroundColor: '#ff8d1e',
      borderColor: 'none',
      boxShadow: 'none',
  },
  },
  space: {
    marginBottom: '30px'
  }
}));

function IngresoCliente(props) {
  const classes = useStyles();
  const {actions} = useContext(Context);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.space}>
          Ingreso Tienda
        </Typography>
        <form className={classes.form} noValidate>
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
            onChange={e => actions.handleChangeTienda(e)}
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
            onChange={e => actions.handleChangeTienda(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => actions.handleLogingTienda(e, props.history)}
          >
           Ingresa
          </Button>
        </form>
      </div>

    </Container>
  );
}

export default withRouter(IngresoCliente);
