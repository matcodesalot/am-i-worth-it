import 'isomorphic-fetch';

export function logInSuccess(data) {
    return {
        type: "LOG_IN_SUCCESS",
        payloadUser: data.username,
        payloadPass: data.password,
    };
}

export function logInError(err) {
    return {
        type: "LOG_IN_ERROR",
        payload: err,
    };
}

export function logInAsync(user) {
    return function(dispatch) {
		let endpoint = "/users/" + user.username;

		return fetch(endpoint, {
			method: "GET",
			headers: {"Authorization": "Basic " + btoa(user.username + ":" + user.password)}
		})
		.then(response => {
			if (response.status < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		})
		.then(data => {
			return dispatch(logInSuccess(data));
		})
		.catch(error => {
			return dispatch(logInError(error));
		})
	}
}