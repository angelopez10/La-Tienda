import React, {useContext} from 'react';
import {Context} from '../../AppContext';
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
import ListItemText from '@material-ui/core/ListItemText';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
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
    paddingTop: '95px',
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
  },
  handleLink: {
    color: 'inherit',
    textDecoration: 'none'
  }
}));

export default function SideNavLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { store } = useContext(Context);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const tienda =  store.filteredTiendas.slice(0, 10);
  console.log(tienda);









  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{width:"7%", transform: 'translateY(104px)'}}
        
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.bgColor} >
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <StorefrontIcon  />
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
            <CloseIcon/>
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to = '/tienda' className={classes.handleLink}>
         {tienda.map((tienda, i) => (
            <ListItem button key={i}>
              <ListItemIcon>
                <StorefrontIcon  />
              </ListItemIcon>
              <ListItemText primary= {tienda.id} />
            </ListItem>
          ))}
          </Link>*/
        </List>
      </Drawer>
    </div>
  );
}
