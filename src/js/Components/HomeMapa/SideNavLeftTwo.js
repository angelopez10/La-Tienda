import React, { useContext } from 'react';
import { Context } from '../../AppContext';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Tienda/producto.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonToolbar from 'react-bootstrap/Button';
import ModalCheckOut from '../Modales/ModalCheckOut';
import Button from 'react-bootstrap/Button';

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    paddingTop: '80px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  bgColor: {
    backgroundColor: '#252525',
    color: '#ff8d1e'
  }
}));

export default function SideNavLeftTwo() {
  const [modalShow, setModalShow] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { store, actions } = useContext(Context);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ width: "7%", transform: 'translateY(169px)' }}

        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.bgColor}>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"

            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}

      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} >
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {
            store.carrito.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon><img class="card-img-top" src="https://picsum.photos/40/40" alt="Card image cap" /></ListItemIcon>
                <div className='row'>
                  <div className='col-12 ml-3 mt-4'>
                    <h6>{item.producto.nombreProducto} | ${item.producto.precio}</h6>
                    <p>Cantidad: {item.cantidad}</p>
                    <Link onClick={() => actions.deleteFromCart(item.producto)}>Eliminar <DeleteIcon /></Link>
                  </div>
                </div>
                <Divider />
              </ListItem>
            ))}
        </List>
        <ButtonToolbar className={classes.position}>
          <Button className={classes.root} onClick={() => setModalShow(true)}>
            Pagar (Total: ${store.total})
		      </Button>
          <ModalCheckOut
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
      </Drawer>
    </div>
  );
}
