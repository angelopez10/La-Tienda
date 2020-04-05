import React, {useContext} from 'react';
import {Context} from '../../AppContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router-dom';




function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}

          La tienda

        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


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

function RegistFormProduct(props) {
  const classes = useStyles();
  const {store, actions} = useContext(Context);
  

  return (
    <Container component="main" maxWidth="xs">
      {
          !!store.error  && (
            <div className={classes.root}>
              <Alert severity="error">{store.error.msg}</Alert>
            </div>)
          }
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingreso de Productos
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            type="file"
            fullWidth
            id="avatar"
            name="avatar"
            autoComplete="avatar"
            autoFocus
            onChange={e => actions.handleChangeFile(e)}
          >
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"

            fullWidth
            id="Nombre_Producto"
            label="Nombre del Producto"
            name="nombreProducto"
            onChange={e => actions.handleChange(e)}
            autoComplete="NombreProducto"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"

            fullWidth
            id="descripcion"
            label="Descripción"
            name="descripcion"
            onChange={e => actions.handleChange(e)}
            autoComplete="descripcion"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"

            fullWidth
            id="Cantidad"
            label="Stock disponible"
            name="stock"
            onChange={e => actions.handleChange(e)}
            autoComplete="Cantidad"
            autoFocus
          />
           <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="Precio"
            label="Precio"
            name="precio"
            onChange={e => actions.handleChange(e)}
            autoComplete="Precio"
          />
          { (store.precio && store.avatar && store.nombreProducto && store.stock )?  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            closeButton
            onClick={e =>{actions.handleSubmitProducto(e, props.history)}}
           // className={classes.submit}
            >
              Ingresar
          </Button> :
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={e =>{actions.handleSubmitProducto(e, props.history)}}
                className={classes.submit}
                >
                  Favor introducir todos los Datos
              </Button>
          }
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default withRouter(RegistFormProduct);