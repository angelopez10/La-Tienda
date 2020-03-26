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

			carrito: []
			

		},
		actions: {
			// Agrega productos al carrito
			addToCart: (item) => {
				const store = getStore();
					let addedItem = store.carrito.concat(item)
					let existedItem = store.carrito.includes(item)
					

					if(existedItem === false){
						setStore({ carrito: addedItem })
					}else{
						
						setStore({cantidad: item.cantidad += 1 })
						
					}
						
				
				console.log(store.carrito)
			}
			
        }
	}


}


export default getState;