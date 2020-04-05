import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '../../AppContext';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles(theme => ({

  createStyles: ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),

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

function IngresoCliente(props) {

  
<<<<<<< HEAD
  const {  actions } = useContext(Context);
=======
  const { actions } = useContext(Context);
>>>>>>> upstream/master




  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingreso Cliente
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
            onChange={e => actions.handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="clave"
            label="clave"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => actions.handleChange(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => actions.handleLogingCliente(e, props.history)}
          >
            Ingresa
          </Button>
        </form>
      </div>
      <div>
        <Button
          href="#"
          color="primary"
          className={classes.button}
        >
          {"Olvido su Clave"}
        </Button>
      </div>
    </Container>
  );
}



export default  withRouter(IngresoCliente);