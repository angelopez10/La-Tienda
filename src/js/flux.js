




const getState = ({ getStore, getActions, setStore }) => {


	return {
		// base datos Angel
		store: {
			usuarios: [{
				cliente1: {
					id: 1,
					nombre: 'Angel',
					apellido: 'López',
					email: 'angelopez10898@gmail.com',
					tipo: 'cliente'
				},
				cliente2: {
					id: 2,
					nombre: 'Jose',
					apellido: 'Rubio',
					email: 'joserubio@gmail.com',
					tipo: 'cliente'
				}
			}],

			tiendas: [{
				id: 1,
				nombre: 'Starbucks',
				rut: '23232323-3',
				email: 'starbucks@gmail.com',
				tipo: 'tienda',
				tipo2: 'Café',
				descripcion: 'Starbucks Corporation es una cadena internacional de café fundada en Washington. Es la compañía de café más grande del mundo, con más de 24 000 locales en 70 países.​',
				productos: [{
					id: 1,
					foto: '',
					nombre: 'Pepsi',
					stock: '25 u',
					precio: '$1690',
					cantidad: 1
				},
				{
					id: 2,
					foto: '',
					nombre: 'Coca-Cola',
					stock: '15 u',
					precio: '$1890',
					cantidad: 1
				}
				]
			},
			{
				id: 1,
				nombre: 'Dunkin Donuts',
				rut: '23232323-3',
				email: 'starbucks@gmail.com',
				tipo: 'tienda',
				tipo2: 'Café',
				descripcion: 'Starbucks Corporation es una cadena internacional de café fundada en Washington. Es la compañía de café más grande del mundo, con más de 24 000 locales en 70 países.​',
				productos: [{
					id: 3,
					foto: '',
					nombre: 'Pepsi',
					stock: '25 u',
					precio: '$1690',
					cantidad: 1
				},
				{
					id: 4,
					foto: '',
					nombre: 'Coca-Cola',
					stock: '15 u',
					precio: '$1890',
					cantidad: 1
				}
				]
			},
			{
				id: 1,
				nombre: 'Burger King',
				rut: '23232323-3',
				email: 'starbucks@gmail.com',
				tipo: 'tienda',
				tipo2: 'Café',
				descripcion: 'Starbucks Corporation es una cadena internacional de café fundada en Washington. Es la compañía de café más grande del mundo, con más de 24 000 locales en 70 países.​',
				productos: [{
					id: 5,
					foto: '',
					nombre: 'Pepsi',
					stock: '25 u',
					precio: '$1690',
					cantidad: 1
				},
				{
					id: 6,
					foto: '',
					nombre: 'Coca-Cola',
					stock: '15 u',
					precio: '$1890',
					cantidad: 1
				}
				]
			}
			],

			carrito: [],

			// Alex mapa
			contacts: [],
			cate: [],
			filteredTiendas: [],


		},
		actions: {

			addToCart: (item) => {
				const store = getStore();
				console.log(store.carrito.includes(item))
				if (store.carrito.includes(item) === false) {
					setStore({ carrito: store.carrito.concat({ item, cantidad: item.cantidad++ }) })
				} else {
					setStore({ carrito: store.carrito.concat({ item }) })
				}
				console.log(store.carrito)
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
						
						const  categoria = [...new Set(data.map(tienda => tienda.category))];
						setStore({ cate: categoria });
					
					})
					.catch(error => {
						console.log(error);
					});


			},

			setTienda: () => {
				const store  = getStore();
				//console.log(store.contacts);
				//const  categoria = [...new Set(store.contacts.map(tienda => tienda.category))];
				//console.log(categoria);

			},

			setFilter: (e) => {
				const store  = getStore();
				console.log(e);

				setStore({ filteredTiendas: e ? store.cate.filter(tienda => tienda.cate === e) : store.contacts });

			},






		}
	}


}


export default getState;