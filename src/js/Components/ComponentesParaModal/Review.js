import React, {useContext} from 'react';
import { Context } from '../../AppContext';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const { store } = useContext(Context);

  console.log(store.carrito);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de orden
      </Typography>
      <List disablePadding>
        {store.carrito.map(producto => (
          <ListItem className={classes.listItem} key={producto.producto.nombre}>
            <ListItemText primary={producto.producto.nombre} secondary={`Cantidad: ${producto.cantidad}`} />
            <Typography variant="body2">${producto.producto.precio}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${store.total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Envío
          </Typography>
        <Typography gutterBottom name='nombre'>{store.nombre_user} {store.apellido}</Typography>
        <Typography gutterBottom>{store.direccion}, {store.direccion2}, {store.ciudad}, {store.region}, {store.codigo_postal}, {store.pais}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalles de pago
          </Typography>
          <Grid container>

              <React.Fragment key={store.name}>
                <Grid item xs={12}>
                  <Typography gutterBottom>{store.nombre_tarjeta}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom>Numero de tarjeta: {store.numero_tarjeta}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom>Fecha de vencimiento: {store.fecha_vencimiento}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}