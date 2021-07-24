/** CSS imports */
import './LoginForm.css';

/** Formik and Yup Imports */
import { useFormik } from 'formik';
import * as yup from 'yup';

/** Material-UI imports */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { LockOutlined } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

/** Redux imports */
import { authActions } from '../../Store/actions/auth-action';
import { connect, useDispatch } from 'react-redux';

/** Style to color the lock icon red */
const useStyles = makeStyles((themes) => ({
    red: {
        backgroundColor: red[700],
    },

    submit: { position: 'relative', top: '10ch' },
}));

/** Yup validation for login form */
const validationSchema = yup.object({
    username: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
});

/** Initial values for Formik fields */
function LoginForm({ appState }) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(authActions.login(values.username, values.password));
        },
    });

    const classes = useStyles();

    return (
        <Box className='loginform'>
            <Box className='backcover'></Box>
            <Box className='paper'>
                <Box className='form-icon'>
                    <Avatar className={classes.red}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                </Box>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        autoComplete='off'
                        id='username'
                        label='Email ID'
                        name='username'
                        autoFocus
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.username &&
                            Boolean(formik.errors.username)
                        }
                        helperText={
                            formik.touched.username && formik.errors.username
                        }
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
                <label>
                    Test:
                    {JSON.stringify(appState)}
                </label>
            </Box>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return { appState: state.authentication };
};

const connectedLoginForm = connect(mapStateToProps)(LoginForm);

export { connectedLoginForm as LoginForm };
