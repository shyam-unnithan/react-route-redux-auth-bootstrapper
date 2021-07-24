import { authConstants } from '../constants/auth-constants';
import { authService } from '../../Services/auth';
import createBrowserHistory from '../../Helpers/history';

export const authActions = {
    login,
    logout,
};

function login(username, password) {
    return (dispatch) => {
        dispatch(request({ username }));
        authService.login(username, password).then(
            (user) => {
                dispatch(success(user));
                createBrowserHistory.push('/employees', user);
            },
            (error) => {
                dispatch(failure(error.toString()));
                //dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user) {
        return { type: authConstants.LOGIN_REQUEST, user };
    }
    function success(user) {
        return { type: authConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
        return { type: authConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    return { type: authConstants.LOGOUT, user: '' };
}
