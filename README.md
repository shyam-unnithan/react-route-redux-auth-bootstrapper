# Getting started with react-route-redux-auth-bootstrapper

The intent of this project was to reduce the time to setup react applications with integrated redux state management localStorage persistence of state and routing based on user authentication.

If this has been useful, please let me know, it will keep me motivated to add further features and maybe even build bootstrap for other frameworks and implementations and sharing them

This project is a bootstrap application with react and material-ui providing a login interface and a landing page post login.
It has integrated redux state management and authentication based routes. It will help teams get started quickly on building react applications with integrated authentication and state management.

## Features

The current implementation sends the username and password from the login screen and retrieves a token from rest api and puts it in state which is persisted to localStorage.

## Usage

clone the application using
git clone https://github.com/shyam-unnithan/react-route-redux-auth-bootstrapper

`cd react-route-redux-auth-bootstrapper`
`yarn start`

## Configuration

Update the REACT_APP_API_SERVER value in .development.env with the rest server url
The api endpoints may require to be changed in the relevant services.
For e.g. for authentication in the Services/auth.js modify the login function providing relative path to the authentication endpoint and relevant header information.
