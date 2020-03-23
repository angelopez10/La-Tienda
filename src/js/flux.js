const getState = ({ getStore, getActions, setStore }) => {
	return {
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

			tiendas: [ {
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
							precio: '$1690'
						},
						{
							id: 2,
							foto: '',
							nombre: 'Coca-Cola',
							stock: '15 u',
							precio: '$1890'
						}
					]
				},
				{
					id: 1,
					nombre: 'Starbucks',
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
						precio: '$1690'
					},
					{
						id: 4,
						foto: '',
						nombre: 'Coca-Cola',
						stock: '15 u',
						precio: '$1890'
					}
				]
				},
				{
					id: 1,
					nombre: 'Starbucks',
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
						precio: '$1690'
					},
					{
						id: 6,
						foto: '',
						nombre: 'Coca-Cola',
						stock: '15 u',
						precio: '$1890'
					}
				]
				}
				],

			carrito: [] 

		},
		actions: {
			addToCart: (e) => {
				const store = getStore();
				console.log(e.target.id)
				store.tiendas.map((tienda) => {
					tienda.productos.map((item) => {
						console.log(item.id)
						if (store.carrito.includes(item) === false) {
								setStore({ carrito: store.carrito.concat(item) })
							
						}
					})
				})
				console.log(store.carrito)
			}
			
        }
	}


}


export default getState;