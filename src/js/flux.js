const getState = ({ getStore, getActions, setStore }) => {

	return {
		// base datos Angel
		store: {

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

			productos: [{
				id: 1,
				foto: '',
				nombreProducto: 'Queso',
				descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				stock: '25 u',
				precio: '1690',
				id_tienda: 3,
			},
			{
				id: 2,
				foto: '',
				nombreProducto: 'Arroz',
				descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				stock: '25 u',
				precio: '1690',
				id_tienda: 3,
			},
			{
				id: 3,
				foto: '',
				nombreProducto: 'Agua',
				descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				stock: '25 u',
				precio: '1690',
				id_tienda: 3,
			},
			{
				id: 4,
				foto: '',
				nombreProducto: 'Pasta',
				descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				stock: '25 u',
				precio: '1690',
				id_tienda: 3,
			},
			],
			//info para carrito de compras
			carrito: [],
			total: 0,

			// Alex info para registro de usuario
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
			foto: '',
			nombreProducto: '',
			descripcion: '',
			stock: '',
			precio: '',

			// Alex mapa
			contacts: [],
			cate: [],
			filteredTiendas: [],
			mapLat: [],
			mapLng: [],
			checked: [],
			value: [],
			coordenadas: [],

			// Alex front adn Back
			currentUser: null,
			IsAuthenticated: false,
			error: null,



		},
		actions: {
			// Agrega productos al carrito y entrega el valor total a pagar
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
				newCarrito.map((item) => {
					newtotalCarrito = newtotalCarrito + (item.cantidad * item.producto.precio);
				})
				setStore({
					carrito: newCarrito,
					total: newtotalCarrito
				})
			},
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
					newtotalCarrito = newtotalCarrito + (item.cantidad * item.producto.precio);
				})
				setStore({
					carrito: newCarrito,
					total: newtotalCarrito
				})
			},

			// Guarda la info de los inputs del cliente en el store
			handleChange: e => {
				setStore({
					[e.target.name]: e.target.value
				})
			},
			// Guarda la info de los inputs del loging en el store

			handleChangeTienda: e => {
				setStore({
					[e.target.name]: e.target.value
				})
			},

			// Guarda la info de los inputs del loging en el store

			handleChangeCliente: e => {
				setStore({
					[e.target.name]: e.target.value
				})

			},



			handleSubmitProducto: e => {
				const store = getStore();
				e.preventDefault();
				let data = {
					id: store.productos.length + 1,
					foto: store.foto,
					nombreProducto: store.nombreProducto,
					descripcion: store.descripcion,
					stock: store.stock,
					precio: store.precio,
					id_tienda: 1
				}
				setStore({
					productos: store.productos.concat(data)
				})
			},

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

			// Alex registro
			handleSubmitCliente: (e, history) => {
				e.preventDefault();
				const store = getStore();
				console.log(store.nombre)

				let data = {
					"nombre": store.nombre,
					"apellido": store.apellido,
					"email": store.email,
					"direccion": store.direccion,
					"clave": store.clave,
					"telefono": store.telefono
				}
			
				getActions().registro('/api/register', data);

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
				if (dato.msg) {
					setStore({
						error: dato
					})
				} else {
					setStore({
						currentUser: dato,
						IsAuthenticated: true,
						error: null
					})
				}
			},


			// Alex loging 
			handleLogingCliente:  (e, history) => {
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
					history.push('/mapaLigth')
				} 

			},
			



			// Alex Mapa

			setMapa: () => {
				var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
					targetUrl = 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10'

				fetch((proxyUrl + targetUrl), {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ contacts: data });
						setStore({ filteredTiendas: data });
						const categoria = [...new Set(data.map(tienda => tienda.category))];
						setStore({ cate: categoria });
					})
					.catch(error => {
						console.log(error);
					});
			},


			setFilter: (e, contact) => {
				const store = getStore();
				if (contact === undefined) {
					setStore({ filteredTiendas: store.contacts })
				} else {
					setStore({
						filteredTiendas: store.contacts.filter(tienda =>
							tienda.category === contact)
					})
				}
			},

			coordenaasMapa: (e, value) => {
				setStore({ mapLat: e.lat })
				setStore({ mapLng: e.lng })
				setStore({ coordenadas: e })
			},

			toggleChecked: (e) => {
				setStore({ value: e })
				const b = (e === true) ? 'mapbox:///styles/jarb29/ck8brlfqh2b0n1itm4t8eiqai' : 'mapbox://styles/jarb29/ck8boany41vwr1ipblccbomnl';
				setStore({ checked: b })
			},
		},

	}
};

export default getState;