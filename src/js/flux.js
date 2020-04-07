const getState = ({ getStore, getActions, setStore }) => {

	return {
		// base datos Angel
		store: {
			///// Alex URL
			baseURL: 'http://127.0.0.1:5000',


			usuarios: [{

			}],
			tiendas: [{
				id: 1,
				nombre: 'Starbucks',
				rut: '23232323-3',
				email: 'starbucks@gmail.com',
				tipo: 'tienda',
				tipo2: 'Café',
				descripcion: 'Starbucks Corporation es una cadena internacional de café fundada en Washington. Es la compañía de café más grande del mundo, con más de 24 000 locales en 70 países.​',
			},
			{
				id: 2,
				nombre: 'Dunkin Donuts',
				rut: '23232323-3',
				email: 'starbucks@gmail.com',
				tipo: 'tienda',
				tipo2: 'Café',
				descripcion: 'Starbucks Corporation es una cadena internacional de café fundada en Washington. Es la compañía de café más grande del mundo, con más de 24 000 locales en 70 países.​',
			},
			{
				id: 3,
				nombre: 'Burger King',
				rut: '23232323-3',
				email: 'starbucks@gmail.com',
				tipo: 'tienda',
				tipo2: 'Café',
				descripcion: 'Starbucks Corporation es una cadena internacional de café fundada en Washington. Es la compañía de café más grande del mundo, con más de 24 000 locales en 70 países.​',
			}
			],

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

			//info para agregar producto
			avatar: '',
			nombreProducto: '',
			descripcion: '',
			stock: '',
			precio: '',
			productoAgregado: [],
			categoria: [],
			productoEliminado: [],

			// Alex mapa
			contacts: [],
			filteredTiendas: [],


			// Alex front and Back
			currentUser: null,
			IsAuthenticated: false,
			error: null,

			// Alex registro tienda
		
			rut: [],
			errorTienda: null,
			latitude: [],
			longitude: [],

			// Alex tienda seleccionada
			tiendaSeleccionada: [],
			tiendatotal: [],




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

			/////////////////////////// Agrega productos al carrito y entrega el valor total a pagar




			/////////// Guarda la info de los inputs del cliente en el store


			////para todo los registros

			handleChange: e => {
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
					
				}else {setStore({ error: {"msg":"Por favor agregar foto"}})};
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
						error: info
					})
				} else {
					setStore({
						error: null,
						productoAgregado: info,
						IsAuthenticated: true,
					})
					sessionStorage.setItem('currentUser', JSON.stringify(info))
					sessionStorage.setItem('isAuthenticated', true)
				}
			},

			//////////////////////////// Tienda Seleccionada



			storeSelected: (e, id) => {
				const store = getStore();
				console.log(store.currentUser.Usuario.id);
				console.log(id);
				
				

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


			////////////////////////////////////////////////////////








			//////////////////////
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
					newtotalCarrito = newtotalCarrito + (item.cantidad * item.producto.precio);
				})
				setStore({
					carrito: newCarrito,
					total: newtotalCarrito
				})
			},





			///////////////////////////////////// eiliminar productos

			deleteProduct: producto => {
				const store = getStore();
				const { productos } = store;
				let pos = null
				let newProductos = productos.map((item, i) => {
					if (JSON.stringify(item) === JSON.stringify(producto)) {
						pos = i
					}
					return item;
				})
				if (pos !== null) {
					newProductos.splice(pos, 1)
				}
				setStore({
					productos: newProductos
				})
				console.log(productos)
				
			},

			//////////////////////////////////////////// Alex registro del cliente

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
						IsAuthenticated: true,
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
						IsAuthenticated: true,
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
						IsAuthenticated: true,
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
						IsAuthenticated: true,
						errorTienda: null
					});
					sessionStorage.setItem('currentUser', JSON.stringify(dato))
					sessionStorage.setItem('isAuthenticated', true)
					history.push('/admin')
				}

			},

			////////////////////////////// Alex Mapa

			setMapa: (e, history) => {
				const store = getStore();
				console.log(store.currentUser.Usuario.email)
				let data = {
					"clave": store.currentUser.access_token,
					"email": store.currentUser.Usuario.email,
				};
				getActions().mapaTiendas('/api/mapa', data, history);
			},

			mapaTiendas: async (url, data, history) => {
				console.log(data.clave);
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
						contacts: dato,
						filteredTiendas: dato,
					});
				}
			},

			//////////////// Vista administrados
			setTiendaAdmin: (e, history) => {
				const store = getStore();
				let data = {
					"clave": store.currentUser.access_token,
					"email": store.currentUser.Tienda.email,
				};
				getActions().productosAdmin(`/api/admin/${store.currentUser.Tienda.id}`, data, history);
			},

			productosAdmin: async (url, data, history) => {
				console.log(data.clave);
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
						productos: dato,
					});
				}
			},

			deleteProducto: async (e, history) => {
				const store = getStore();
				const { baseURL } = store;
				const resp = await fetch(baseURL + `/api/admin/${e.target.id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + store.currentUser.access_token,
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
						productoEliminado: dato
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

			coordenaasMapa: (e, value) => {
				setStore({ mapLat: e.lat })
				setStore({ mapLng: e.lng })
				setStore({ coordenadas: e })
			},
			////////////////////////////////// Mapa modo nocturno

			toggleChecked: (e) => {
				setStore({ value: e })
				const b = (e === true) ? 'mapbox:///styles/jarb29/ck8brlfqh2b0n1itm4t8eiqai' : 'mapbox://styles/jarb29/ck8boany41vwr1ipblccbomnl';
				setStore({ checked: b })
			},
		},

	}
};

export default getState;