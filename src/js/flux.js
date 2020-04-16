const getState = ({ getStore, getActions, setStore }) => {

	return {
		// base datos Angel
		store: {
			///// Alex URL
			baseURL: 'http://127.0.0.1:5000',
			

			productos: [],
			//info para carrito de compras
			carrito: [],
			total: 0,


			//Alex info para registro de usuario

			nombre: '',
			apellido: '',
			email: '',
			direccion: '',
			clave: '',
			telefono: '',

			//info para checkout
			nombre_user: '',
			apellido_user: '',
			direccion1: '',
			direccion2: '',
			ciudad: '',
			region: '',
			pais: '',
			codigo_postal: '',
			nombre_tarjeta: '',
			numero_tarjeta: '',
			fecha_vencimiento: '',
			cvv: '',
			ItemProductoCompradoId: [],
			CantidaProductoComprado: [],
			precioProductoSeleccionado: [],
			productosActualizados: [],
			productosComprados:[],


			//info para agregar producto
			avatar: '',
			nombreProducto: '',
			descripcion: '',
			stock: '',
			precio: '',
			productoAgregado: null,
			categoria: [],
			deletedProduct: null,
			productoEliminado: [],
			productoEditado: null,


			// Alex mapa
			contacts: [],
			filteredTiendas: [],
			coordenadas: [],
			latitude: [],
			longitude: [],


			// Alex front and Back
			currentUser: null,
			isAuthenticated: false,
			error: null,

			// Alex registro tienda

			rut: [],
			errorTienda: null,


			// Alex tienda seleccionada
			tiendaSeleccionada: [],
			tiendatotal: [],
			id_tienda_seleccionada: [],
			nombreTiendaSeleccionada: [],
			emailTiendaSeleccionada:[],




		},
		actions: {
			/////// Funcion de autenticacion para el login 

			isAuthenticated: () => {
				if (sessionStorage.getItem("currentUser")) {
					// Restaura el contenido al campo de texto
					let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
					let isAuthenticated = sessionStorage.getItem("isAuthenticated");
					setStore({
						currentUser: currentUser,
						isAuthenticated: isAuthenticated
					})
				}
			},


			////para todo los registros

			handleChange: e => {
				console.log(e.target.value)
				setStore({
					[e.target.name]: e.target.value
				})
			},

			handleChangeCliente: e => {
				setStore({
					[e.target.name]: e.target.value
				})
			},


			handleChangeTienda: e => {
				setStore({
					[e.target.name]: e.target.value
				})
			},

			handleChangeRegistroTienda: e => {
				console.log(e.target.value)
				setStore({
					[e.target.name]: e.target.value
				})
			},

			handleChangeFile: e => {
				setStore({
					[e.target.name]: e.target.files[0]
				})
			},

			///////////////////////////////////////// envio de productos


			handleSubmitProducto: (e, history) => {
				e.preventDefault();
				const store = getStore();
				let formData = new FormData();
				formData.append("nombreProducto", store.nombreProducto);
				formData.append("descripcion", store.descripcion);
				formData.append("stock", store.stock);
				formData.append("precio", store.precio);
				formData.append("categoria", store.categoria);
				formData.append("tienda_id", store.currentUser.Tienda.id);
				if (store.avatar !== ' ') {
					formData.append("avatar", store.avatar)

				} else { setStore({ error: { "msg": "Por favor agregar foto" } }) };
				console.log(store.avatar);



				getActions().register('/api/register/producto', formData, history)
			},

			register: async (url, data, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'POST',
					body: data
				})
				const info = await resp.json();
				console.log(info)

				if (info.msg) {
					setStore({
						error: null,
						productoAgregado: info.msg,
						isAuthenticated: true,
					})
					sessionStorage.getItem('isAuthenticated', true)
				}
				console.log(store.productoAgregado)
			},

			deleteErrors: (e) => {
				const store = getStore();
				setStore({ 
					error: null,
					productoAgregado: null,
					deletedProduct: null,
					productoEditado: null
				 });
			},
			//////////////////////////// Tienda Seleccionada


			storeSelected: (e, id) => {
				const store = getStore();
				setStore({ id_tienda_seleccionada: id });

				store.contacts.map(tienda => {
					if (tienda.id === id) {
						return setStore({ nombreTiendaSeleccionada: tienda.nombre, emailTiendaSeleccionada:tienda.email });
					}
				});


				let data = {
					"clave": store.currentUser.access_token,
					"email": store.currentUser.Usuario.email,
				};

				getActions().selectedTienda(`/api/tienda/${id}`, data);
			},

			selectedTienda: async (url, data) => {

				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + data.clave,
					},

				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
					setStore({
						tiendaSeleccionada: dato,
						tiendatotal: dato,
					});
				}
			},

			//////////////////Filtro de tienda 

			setFilterTienda: (e, contact) => {
				const store = getStore();
				console.log(contact);
				if (contact === undefined) {
					setStore({ tiendaSeleccionada: store.tiendatotal })
				} else {
					setStore({
						tiendaSeleccionada: store.tiendatotal.filter(tienda =>
							tienda.categoria === contact)
					})
				}
			},


			/////////////////////////////////////////////////////// Agregando al carro


			addToCart: producto => {
				const store = getStore();
				let { carrito } = store;
				let existe = false;
				let newtotalCarrito = 0;
				console.log(producto);
				console.log(carrito);
				let newCarrito = carrito.map((item) => {
					if (JSON.stringify(item.producto) === JSON.stringify(producto)) {
						item.cantidad += 1;
						existe = true;
						return item;
					}
					return item;
				})
				if (!existe) {
					newCarrito.push({
						id: carrito.length + 1,
						producto: producto,
						cantidad: 1
					})
				}
				newCarrito.map(item => {
					return newtotalCarrito = newtotalCarrito + (item.cantidad * item.producto.precio);
				})
				setStore({
					carrito: newCarrito,
					total: newtotalCarrito
				})
			},




			////////////////////////////  para borrar del carro

			deleteFromCart: producto => {
				const store = getStore();
				let { carrito } = store;
				let newtotalCarrito = 0;
				let pos = null;
				let newCarrito = carrito.map((item, i) => {
					if (JSON.stringify(item.producto) === JSON.stringify(producto)) {
						if (item.cantidad === 1) {
							pos = i;
							item.cantidad -= 1;
						} else {
							item.cantidad -= 1;
						}
						return item;
					}
					return item;
				})
				if (pos !== null) {
					newCarrito.splice(pos, 1);
				}
				newCarrito.map((item) => {
					return newtotalCarrito = newtotalCarrito + (item.cantidad * item.producto.precio);
				})
				setStore({
					carrito: newCarrito,
					total: newtotalCarrito
				})
			},

			////////////////////////////////////////////////// Alex registro del cliente

			handleSubmitCliente: (e, history) => {
				e.preventDefault();
				const store = getStore();


				let data = {
					"nombre": store.nombre,
					"apellido": store.apellido,
					"email": store.email,
					"direccion": store.direccion,
					"clave": store.clave,
					"telefono": store.telefono
				}

				getActions().registro('/api/register', data, history);
			},

			registro: async (url, data, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
					setStore({
						currentUser: dato,
						isAuthenticated: true,
						error: null
					});

				}
			},


			////////////////////////////////////// Alex loging del cliente

			handleLogingCliente: (e, history) => {
				e.preventDefault();
				const store = getStore();
				let data = {
					"email": store.email,
					"clave": store.clave,
				}
				getActions().loging('/api/loging', data, history);
			},

			loging: async (url, data, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					},
				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({

						error: dato
					})
				} else {
					setStore({

						currentUser: dato,
						isAuthenticated: true,
						error: null
					});
					sessionStorage.setItem('currentUser', JSON.stringify(dato))
					sessionStorage.setItem('isAuthenticated', true)
					history.push('/mapaLigth')
				}

			},


			///////////////////////////////////////// Alex registro de la tienda

			handleSubmitTienda: (e, history) => {
				e.preventDefault();
				const store = getStore();


				let data = {
					"nombre": store.nombre,
					"categoria": store.categoria,
					"rut": store.rut,
					"email": store.email,
					"latitude": store.latitude,
					"longitude": store.longitude,
					"clave": store.clave,
				}
				getActions().registroTienda('/api/registerTienda', data, history);
			},

			registroTienda: async (url, data, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({
						errorTienda: dato
					})
				} else {
					setStore({
						currentUser: dato,
						isAuthenticated: true,
						errorTienda: null
					});
				}
			},
			////////////////////////////////// Alex loging de la Tienda

			handleLogingTienda: (e, history) => {
				e.preventDefault();
				const store = getStore();
				let data = {
					"email": store.email,
					"clave": store.clave,
				}
				getActions().logingTienda('/api/logingTienda', data, history);
			},

			logingTienda: async (url, data, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					},
				})
				const dato = await resp.json();
				if (dato.msg) {
					setStore({
						errorTienda: dato
					})
				} else {
					setStore({
						currentUser: dato,
						isAuthenticated: true,
						errorTienda: null
					});
					sessionStorage.setItem('currentUser', JSON.stringify(dato))
					sessionStorage.setItem('isAuthenticated', true)
					history.push('/admin')
				}

			},

			/////////////////////////////////////////////// Alex Mapa

			setMapa: (e, history) => {
				const store = getStore();
		
				let data = JSON.parse(sessionStorage.getItem("currentUser"))
				getActions().mapaTiendas('/api/mapa', data, history);
			},

			mapaTiendas: async (url, data, history) => {
				console.log(data.access_token);
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + data.access_token,
					},
				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
					setStore({
						contacts: dato,
						filteredTiendas: dato,
					});
				}
			},

			//////////////// Vista administrados

			setTiendaAdmin: async (url) => {
				const store = getStore();
				let data = JSON.parse(sessionStorage.getItem("currentUser"))

				const { baseURL } = store;
				const resp = await fetch(baseURL + `/api/admin/${data.Tienda.id}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + data.access_token,
					},

				})
				const dato = await resp.json();
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
					setStore({
						productos: [...dato],
					});
				}
			},

			deleteProducto: async (e, id) => {
				const store = getStore();
				console.log(id)
				let data = JSON.parse(sessionStorage.getItem("currentUser"))
				const { baseURL } = store;
				const resp = await fetch(baseURL + `/api/admin/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + data.access_token,
					},
				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					getActions().setTiendaAdmin();
					setStore({
						deletedProduct: dato.msg
					})
				}
			},

			editarProducto: async (e, id, producto) => {
				e.preventDefault();
				const store = getStore();
				let formData = new FormData();
				formData.append("nombre", producto.nombre);
				formData.append("descripcion", producto.descripcion);
				formData.append("stock", producto.stock);
				formData.append("precio", producto.precio);

				let data = JSON.parse(sessionStorage.getItem("currentUser"))
				const { baseURL } = store;
				const resp = await fetch(baseURL + `/api/editar/producto/${id}`, {
					method: 'PUT',
					body: formData,
					headers: {
						'Authorization': 'Bearer ' + data.access_token,
					},
				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					getActions().setTiendaAdmin();
					setStore({
						productoEditado: dato.msg
					})
				}
			},




			//////////////// Filtro de tiendas para el mapa
			setFilter: (e, contact) => {
				const store = getStore();
				console.log(contact);
				if (contact === undefined) {
					setStore({ contacts: store.filteredTiendas })
				} else {
					setStore({
						contacts: store.filteredTiendas.filter(tienda =>
							tienda.categoria === contact)
					})
				}
			},

			coordenaasMapa: (e) => {
				console.log(e)
				
				setStore({coordenadas:e})
				setStore({latitude: e.lat})
				setStore({longitude: e.lng})

				
			},
			////////////////////////////////// Mapa modo nocturno

			toggleChecked: (e) => {
				setStore({ value: e })
				const b = (e === true) ? 'mapbox:///styles/jarb29/ck8brlfqh2b0n1itm4t8eiqai' : 'mapbox://styles/jarb29/ck8boany41vwr1ipblccbomnl';
				setStore({ checked: b })
			},


			////////////////////////////////////// Pago y checkout
			

			productoComprado: (e) => {
				const store = getStore();

				store.carrito.map(ItemCarrito => {
					store.tiendaSeleccionada.map(ItemTienda => {
						if (ItemTienda.nombre === ItemCarrito.producto.nombre) {
						

							store.ItemProductoCompradoId.push(ItemTienda.id);
							store.CantidaProductoComprado.push(ItemCarrito.cantidad);
							store.precioProductoSeleccionado.push(ItemTienda.precio);
							store.productosComprados.push({nombre:ItemTienda.nombre, precio:ItemTienda.precio, cantidad: ItemCarrito.cantidad, total: store.total, nombreTiendaselec: store.nombreTiendaSeleccionada})



						}
					})
				});
			

				let data = {
					"usuario_id": store.currentUser.Usuario.id,
					"ItemProductoCompradoId": store.ItemProductoCompradoId,
					"CantidaProductoComprado": store.CantidaProductoComprado,
					"precioProductoSeleccionado": store.precioProductoSeleccionado,
					"totalFactura":store.total,
					"totalProductosComprados": store.productosComprados,
					"usuarioActual":store.currentUser,
					"emailTiendaSeleccionada":store.emailTiendaSeleccionada,

				}
				console.log(store.ItemProductoCompradoId, "comprado")
				console.log(store.CantidaProductoComprado, "cantidad")
				console.log(store.precioProductoSeleccionado, "Precio")

				getActions().productosComprados(`/api/checkout/${store.id_tienda_seleccionada}`, data);
			},

			productosComprados: async (url, data, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + url, {
					method: 'PUT',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const dato = await resp.json();
				console.log(dato)
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
					setStore({productosActualizados: dato})

				}
			},
			logout: e => {
                sessionStorage.removeItem("currentUser");
                sessionStorage.removeItem("isAuthenticated");
                setStore({
                    currentUser: null,
                    isAuthenticated: false
                })
            },
		},

	}
};

export default getState;