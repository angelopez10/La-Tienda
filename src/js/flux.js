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

			tiendas: [{
				tienda1: {
					id: 1,
					nombre: 'Starbucks',
					rut: '23232323-3',
					email: 'starbucks@gmail.com',
					tipo: 'tienda',
					tipo2: 'Café',
					descripcion: 'Starbucks Corporation es una cadena internacional de café fundada en Washington. Es la compañía de café más grande del mundo, con más de 24 000 locales en 70 países.​',
					productos: [{
						producto1: {
							foto: '',
							nombre: 'Pepsi',
							stock: '25 u',
							precio: '$1690'
						},
						producto2: {
							foto: '',
							nombre: 'Coca-Cola',
							stock: '15 u',
							precio: '$1890'
						}
					}]
				}
			}]

		},
		actions: {
			

        }
	}


}


export default getState;