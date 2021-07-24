import { connect, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { authActions } from '../../Store/actions/auth-action';

function EmployeeForm({ appState }) {
    const dispatch = useDispatch();

    function logout() {
        dispatch(authActions.logout());
    }

    return (
        <div>
            LoggedIn : {JSON.stringify(appState.authentication.loggedIn)}
            <Button onClick={logout}>Logout</Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { appState: { authentication: state.authentication } };
};

const connectedEmployeeForm = connect(mapStateToProps)(EmployeeForm);

export { connectedEmployeeForm as EmployeeForm };
