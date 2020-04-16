import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../AppContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        La tienda
        </Link>{' '}
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
}));

export default function EditarProducto(props) {
  const classes = useStyles();
  const { actions } = useContext(Context);
  const [ producto, setProducto ] = useState({
    avatar: '',
    nombre: '',
    descripcion: '',
    stock: '',
    precio: '',
    categoria: [],
  })

  useEffect(() => {
    setProducto({...producto, ...props.producto})
  }, [])

  const handleChange = e => {
		const { name, value } = e.target;
		setProducto({ ...producto, [name]: value });
	};
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edita tus productos
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Nombre_Producto"
            label="Nombre del Producto"
            value={producto.nombre}
            name="nombre"
            onChange={e => handleChange(e)}
            autoComplete="NombreProducto"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="descripcion"
            label="categoria"
            value={producto.categoria}
            name="categoria"
            onChange={e => handleChange(e)}
            autoComplete="descripcion"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="descripcion"
            label="Descripción"
            value={producto.description}
            name="description"
            onChange={e => handleChange(e)}
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
            value={producto.stock}
            name="stock"
            onChange={e => handleChange(e)}
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
            value={producto.precio}
            name="precio"
            onChange={e => handleChange(e)}
            autoComplete="Precio"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => actions.editarProducto(e, props.producto.id, producto)}
          >
            Editar
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}