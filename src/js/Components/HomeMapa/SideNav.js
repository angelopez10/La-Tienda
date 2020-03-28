import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../Home_principal/logo_transparent_background.png';
import { Link } from 'react-router-dom'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import { Context } from "../../AppContext";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#252525'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        color: '#ff8d1e',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    button: {
        backgroundColor: '#ff8d1e',
        border: 0,
        borderRadius: 10,
        color: 'black',
        height: 40,
        padding: '0 30px',
        '&:hover': {
            backgroundColor: '#ff8d1e',
            borderColor: 'none',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#ff8d1e',
            borderColor: 'none',
        },
        '&:focus': {
            backgroundColor: '#ff8d1e',
            boxShadow: 'none'
        },
    },
    bgColor: {
        color: '#252525',

    },
    Color: {
        color: '#252525',
    }


}));


export const SideNav = props => {




    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { store, actions } = useContext(Context);
    const [filterCategory, setFilterCategory] = React.useState(null);
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
      });
   

    const categories = [...new Set(store.contacts.map(tienda => tienda.category))]


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        actions.coordenaasMapa(coordinates);
      }, [coordinates.lat]);


    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
       
        const latLng = await getLatLng(results[0]);
        
        setAddress(value);
        setCoordinates(latLng);
    };






    return (


        <div className={classes.root} >
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar className={classes.root}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Link to='/' >
                        <img src={logo} alt='' />
                    </Link>
                    <nav className="navbar navbar-light  bg-color col-10">
                        <p href="#!" className="navbar-brand"></p>
                        <form className="form-inline">
                           
                                    <PlacesAutocomplete
                                        value={address}
                                        onChange={setAddress}
                                        onSelect={handleSelect}
                                        
                                    >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                            <div className="form-control mr-sm-2"  style={{  paddingTop: '3px', margin:0 }} >
                                                <input {...getInputProps({ placeholder: "Direccion" })}  style={{ width: '360px', marginLeft:0 }} id="input" type="search"/>
                                            <div>
                                                    {loading ? <div>...loading</div> : null}

                                                    {suggestions.map(suggestion => {
                                                        const style = {
                                                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                                        };

                                                        return (
                                                            <div {...getSuggestionItemProps(suggestion, { style })}>
                                                                {suggestion.description}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </PlacesAutocomplete>
                            
                        </form>
                    </nav>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.bgColor}>
                    <Divider />
                    {filterCategory && (
                        <ListItem button
                            onClick={e => actions.setFilter(e, undefined)
                            }
                        >
                            <LocalGroceryStoreIcon />
                            <ListItemText primary="Tiendas en General" />
                        </ListItem>
                    )}
                    <Divider />
                    {categories.map((contact, index) => (
                        <ListItem button
                            key={contact}
                            onClick={e => {
                                setFilterCategory(contact)
                                actions.setFilter(e, contact)
                            }
                            }
                        >
                            <ListItemIcon>{index % 2 === 0 ? <LocalBarOutlinedIcon /> : <StorefrontOutlinedIcon />}</ListItemIcon>
                            <ListItemText primary={contact} />
                        </ListItem >
                    ))}
                </List>
                <Divider />
            </Drawer>
        </div >

    );
}




