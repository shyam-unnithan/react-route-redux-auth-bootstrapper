export const authService = {
    login,
    logout,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    };

    return fetch(
        `${process.env.REACT_APP_API_SERVER}/api-token-auth/`,
        requestOptions
    )
        .then(handleResponse)
        .then((user) => {
            // keep user logged in between page refreshes
            //localStorage.setItem('appState', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // Remote call to trigger logout on the server side.
}

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
