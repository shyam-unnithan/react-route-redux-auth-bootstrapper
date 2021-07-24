import React from 'react';
import history from './Helpers/history';
import { connect } from 'react-redux';
import { Switch, Redirect, Route, Router } from 'react-router-dom';
import Login from './Components/Login';
import Employee from './Components/Employee';

const Routes = ({ appState }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Login} />
                <PrivateRoute
                    exact
                    path='/employees'
                    auth={
                        appState.authentication &&
                        appState.authentication.loggedIn
                            ? true
                            : false
                    }
                    component={Employee}
                />
            </Switch>
        </Router>
    );
};
const PrivateRoute = ({ component: Component, auth }) => (
    <Route
        render={(props) =>
            auth === true ? (
                <Component auth={auth} {...props} />
            ) : (
                <Redirect to={{ pathname: '/' }} />
            )
        }
    />
);

const mapStateToProps = (state) => {
    return { appState: { authentication: state.authentication } };
};

const connectedRoutes = connect(mapStateToProps)(Routes);

export { connectedRoutes as Routes };
