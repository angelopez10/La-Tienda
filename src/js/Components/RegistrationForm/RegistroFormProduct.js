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

export default function RegistFormProduct() {
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
          Ingreso de Productos
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            type="file"
            required
            fullWidth
            id="Foto"
            name="foto"
            onChange={e => actions.handleChangeFile(e)}
            autoComplete="Foto"
            autoFocus
          >
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
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
            required
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
            required
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
            required
            fullWidth
            id="Precio"
            label="Precio"
            name="precio"
            onChange={e => actions.handleChange(e)}
            autoComplete="Precio"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => actions.handleSubmitProducto(e)}
          >
            Agregar
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}