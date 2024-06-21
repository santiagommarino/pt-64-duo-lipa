const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: sessionStorage.getItem('jwtToken'),
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			handleLogin: async (login, password) => {
				let response = await fetch(process.env.BACKEND_URL + 'login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: login,
						password: password,
						username: login
					}),
				})
				let data = await response.json()
				if (data) {
					console.log(data)
					sessionStorage.setItem('jwtToken', data.access_token);
					window.location.reload()
					return true;
				}
				else {
					throw new Error(data[0].error); // Throw error if unexpected response
				}
			},

			handleLogOut: () => {
				sessionStorage.removeItem("jwtToken");
				sessionStorage.removeItem("userInfo");
				setStore({ user: null });
				window.location.reload()
			},

			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
