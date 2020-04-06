import React, { useContext } from 'react';
import './producto.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import Divider from '@material-ui/core/Divider';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { Context } from "../../AppContext";




export default function Categories() {

    const { store, actions } = useContext(Context);
    const [filterCategory, setFilterCategory] = React.useState(null);
    const categories = [...new Set(store.tiendaSeleccionada.map(tienda => tienda.nombre))]
    console.log(categories);




    return (
            <div class="col-12 col-sm-3">
                <div class="card bg-light mb-3">
                    <div class="card-header  categories text-uppercase"><i class="fa fa-list pr-2"></i> Categorias</div>
                    <ul class="list-group categories-list category_block">
                    {filterCategory && (
                        <ListItem button
                            onClick={e => actions.setFilterTienda(e, undefined)
                            }
                        >
                            <LocalGroceryStoreIcon />
                            <ListItemText primary="Todos los Productos" />
                        </ListItem>
                    )}
                    <Divider />
                    {categories.map((contact, index) => (
                        <ListItem button
                            key={contact}
                            onClick={e => {
                                setFilterCategory(contact)
                                actions.setFilterTienda(e, contact)
                            }}
                        >
                            <ListItemIcon>{index % 2 === 0 ? <StorefrontOutlinedIcon  /> : <StorefrontOutlinedIcon />}</ListItemIcon>
                            <ListItemText primary={contact} />
                        </ListItem >
                    ))}
                   
                    </ul>
                </div>
            </div>
    )
}
